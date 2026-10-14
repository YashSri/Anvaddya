import { NextResponse } from "next/server";
import { Resend } from "resend";
import { normalise, validate, type EnquiryInput } from "@/lib/enquiry";

/**
 * POST /api/enquiry — delivers a school partnership enquiry by email via Resend.
 *
 * Required env (see .env.example):
 *   RESEND_API_KEY      Resend API key
 *   ENQUIRY_TO_EMAIL    inbox that receives enquiries
 *   ENQUIRY_FROM_EMAIL  sender on a Resend-verified domain
 *
 * If configuration is missing the route returns 503 — it never pretends a submission was delivered.
 */

// Minimum time between page render and submit; faster submissions are almost always bots.
const MIN_FILL_MS = 3000;

// Best-effort, per-instance rate limit. On serverless hosts each instance keeps its own window.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

function rows(d: EnquiryInput): [string, string][] {
  return [
    ["Name", d.name],
    ["Work email", d.email],
    ["Phone", d.phone || "—"],
    ["School / institution", d.school],
    ["Role", d.role],
    ["City", d.city],
    ["State", d.state],
    ["Classes of interest", d.classes.join(", ")],
    ["Message / areas of interest", d.message || "—"],
    ["Consent to follow-up", d.consent ? "Yes" : "No"],
  ];
}

function renderHtml(d: EnquiryInput) {
  const body = rows(d)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:10px 14px;border-bottom:1px solid #f1e4d6;color:#57534e;font-size:13px;width:190px;vertical-align:top">${escapeHtml(k)}</td><td style="padding:10px 14px;border-bottom:1px solid #f1e4d6;color:#1c1917;font-size:14px;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
    )
    .join("");
  return `<!doctype html><html><body style="margin:0;background:#fff7ed;font-family:Arial,Helvetica,sans-serif">
<div style="max-width:640px;margin:0 auto;padding:28px 16px">
  <div style="background:#431407;color:#fff;border-radius:12px 12px 0 0;padding:22px 24px">
    <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#fdba74">Anvaddya Orbit · Website enquiry</div>
    <div style="font-size:22px;margin-top:6px">New school partnership enquiry</div>
  </div>
  <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:0 0 12px 12px">${body}</table>
  <p style="color:#57534e;font-size:12px;margin-top:16px">Reply to this email to respond directly to ${escapeHtml(d.name)}.</p>
</div></body></html>`;
}

function renderText(d: EnquiryInput) {
  return ["New school partnership enquiry — Anvaddya Orbit", "", ...rows(d).map(([k, v]) => `${k}: ${v}`)].join("\n");
}

const MAX_BODY_BYTES = 20_000;

/** Rejects cross-site posts: browsers always send Origin on POST, and it must match this host. */
function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true; // non-browser clients; still subject to validation, honeypot and rate limit
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 403 });
  }

  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "Your message is too long." }, { status: 413 });
  }

  let raw: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(text);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("not an object");
    raw = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Spam protection: honeypot + minimum fill time. Respond with success-shaped 200 so bots learn nothing,
  // but do not send anything.
  const startedAt = Number(raw.startedAt);
  if ((typeof raw.website === "string" && raw.website.trim() !== "") || !startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return NextResponse.json({ ok: true });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many enquiries from this connection. Please try again later." },
      { status: 429 },
    );
  }

  const data = normalise(raw);
  const errors = validate(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "Please correct the highlighted fields.", errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("[enquiry] Email delivery is not configured: set RESEND_API_KEY, ENQUIRY_TO_EMAIL and ENQUIRY_FROM_EMAIL.");
    return NextResponse.json(
      { ok: false, error: "Online enquiries are not available right now.", code: "not_configured" },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: to.split(",").map((s) => s.trim()).filter(Boolean),
      replyTo: data.email,
      subject: `New partnership enquiry — ${data.school} (${data.city})`.replace(/\s+/g, " "),
      html: renderHtml(data),
      text: renderText(data),
    });
    if (error) {
      console.error("[enquiry] Resend rejected the email:", error);
      return NextResponse.json({ ok: false, error: "We couldn't send your enquiry just now." }, { status: 502 });
    }
  } catch (err) {
    console.error("[enquiry] Unexpected error sending email:", err);
    return NextResponse.json({ ok: false, error: "We couldn't send your enquiry just now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
