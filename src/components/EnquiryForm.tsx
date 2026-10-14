"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { site } from "@/content/site";
import { classGroups, limits, normalise, roles, validate, type EnquiryErrors } from "@/lib/enquiry";
import { buttonClasses } from "./Button";
import { Icon } from "./Icon";

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-base text-ink placeholder:text-ink-soft/60 transition-colors focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-200";

function Field({
  id,
  label,
  error,
  optional,
  hint,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
        {optional ? <span className="font-normal text-ink-soft"> (optional)</span> : <span className="text-brand-700"> *</span>}
      </label>
      {children}
      {hint && !error ? (
        <p id={`${id}-hint`} className="mt-1.5 text-sm text-ink-soft">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [message, setMessage] = useState("");
  const startedAt = useRef<number>(0);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const describedBy = (id: keyof EnquiryErrors, hint = false) =>
    errors[id] ? `${id}-error` : hint ? `${id}-hint` : undefined;

  const cls = (id: keyof EnquiryErrors) => `${inputBase} ${errors[id] ? "border-red-600" : "border-line"}`;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      school: fd.get("school"),
      role: fd.get("role"),
      city: fd.get("city"),
      state: fd.get("state"),
      classes: fd.getAll("classes"),
      message: fd.get("message"),
      consent: fd.get("consent") === "on",
      website: fd.get("website"),
      startedAt: startedAt.current,
    };

    const clientErrors = validate(normalise(payload));
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length > 0) {
      setStatus("error");
      setMessage("Please correct the highlighted fields.");
      const first = Object.keys(clientErrors)[0];
      const el = form.querySelector<HTMLElement>(first === "classes" ? `[name="classes"]` : `[name="${first}"]`);
      el?.focus();
      return;
    }

    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; errors?: EnquiryErrors };
      if (res.ok && json.ok) {
        setStatus("success");
        form.reset();
        startedAt.current = Date.now();
      } else {
        if (json.errors) setErrors(json.errors);
        setStatus("error");
        setMessage(json.error || "We couldn't send your enquiry just now.");
      }
    } catch {
      setStatus("error");
      setMessage("We couldn't reach the server. Please check your connection and try again.");
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  if (status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="rounded-2xl border border-brand-200 bg-white p-8 text-center sm:p-12"
      >
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h2 className="display mt-6 text-4xl">Thank you — we&apos;ve received your enquiry.</h2>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          The Anvaddya team will follow up by email to discuss programme fit, scheduling, and next steps.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setErrors({});
          }}
          className="mt-8 font-semibold text-brand-700 underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-describedby="form-required-note"
      className="relative rounded-2xl border border-line bg-white p-6 shadow-xl shadow-brand-900/5 sm:p-10"
    >
      <p id="form-required-note" className="text-sm text-ink-soft">
        Fields marked <span className="text-brand-700">*</span> are required.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <input id="name" name="name" type="text" autoComplete="name" maxLength={limits.name}
            aria-invalid={!!errors.name} aria-describedby={describedBy("name")} className={cls("name")} />
        </Field>
        <Field id="email" label="Work email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" inputMode="email" maxLength={limits.email}
            aria-invalid={!!errors.email} aria-describedby={describedBy("email")} className={cls("email")} />
        </Field>
        <Field id="phone" label="Phone number" optional error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={limits.phone}
            aria-invalid={!!errors.phone} aria-describedby={describedBy("phone")} className={cls("phone")} />
        </Field>
        <Field id="role" label="Role" error={errors.role}>
          <div className="relative">
            <select id="role" name="role" defaultValue="" aria-invalid={!!errors.role} aria-describedby={describedBy("role")}
              className={`${cls("role")} appearance-none pr-11`}>
              <option value="" disabled>Select your role</option>
              {roles.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            <Icon name="chevron" className="pointer-events-none absolute right-4 top-1/2 mt-1 h-5 w-5 -translate-y-1/2 text-brand-700" />
          </div>
        </Field>
        <div className="sm:col-span-2">
          <Field id="school" label="School / institution name" error={errors.school}>
            <input id="school" name="school" type="text" autoComplete="organization" maxLength={limits.school}
              aria-invalid={!!errors.school} aria-describedby={describedBy("school")} className={cls("school")} />
          </Field>
        </div>
        <Field id="city" label="City" error={errors.city}>
          <input id="city" name="city" type="text" autoComplete="address-level2" maxLength={limits.city}
            aria-invalid={!!errors.city} aria-describedby={describedBy("city")} className={cls("city")} />
        </Field>
        <Field id="state" label="State" error={errors.state}>
          <input id="state" name="state" type="text" autoComplete="address-level1" maxLength={limits.state}
            aria-invalid={!!errors.state} aria-describedby={describedBy("state")} className={cls("state")} />
        </Field>
      </div>

      <fieldset className="mt-6" aria-describedby={errors.classes ? "classes-error" : undefined}>
        <legend className="text-sm font-semibold text-ink">
          Student age groups or classes of interest <span className="text-brand-700">*</span>
        </legend>
        <div className="mt-3 flex flex-wrap gap-2.5">
          {classGroups.map((g) => (
            <label key={g} className="cursor-pointer">
              <input type="checkbox" name="classes" value={g} className="peer sr-only" />
              <span className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-500 peer-checked:border-brand-700 peer-checked:bg-brand-700 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-brand-600 peer-focus-visible:ring-offset-2">
                {g}
              </span>
            </label>
          ))}
        </div>
        {errors.classes ? (
          <p id="classes-error" className="mt-1.5 text-sm font-medium text-red-700">{errors.classes}</p>
        ) : null}
      </fieldset>

      <div className="mt-6">
        <Field id="message" label="Message / areas of interest" optional error={errors.message}
          hint="For example: the classes you have in mind, existing lab spaces, or timing.">
          <textarea id="message" name="message" rows={5} maxLength={limits.message}
            aria-invalid={!!errors.message} aria-describedby={describedBy("message", true)} className={cls("message")} />
        </Field>
      </div>

      {/* Honeypot — hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6">
        <label className="flex cursor-pointer items-start gap-3">
          <input type="checkbox" name="consent" id="consent"
            aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-1 h-5 w-5 shrink-0 rounded border-line accent-brand-700" />
          <span className="text-sm leading-relaxed text-ink-soft">
            I agree that {site.company} may contact me about this enquiry, and I have read the{" "}
            <Link href="/privacy" className="font-semibold text-brand-700 underline underline-offset-2">privacy notice</Link>.
            <span className="text-brand-700"> *</span>
          </span>
        </label>
        {errors.consent ? (
          <p id="consent-error" className="mt-1.5 text-sm font-medium text-red-700">{errors.consent}</p>
        ) : null}
      </div>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {status === "error" && message ? (
          <div role="alert" className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            <p className="font-semibold">{message}</p>
            {Object.keys(errors).length === 0 ? (
              <p className="mt-1">
                You can also email us directly at{" "}
                <a className="font-semibold underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
              </p>
            ) : null}
          </div>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={`${buttonClasses.base} ${buttonClasses.primary} mt-8 w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto`}
      >
        {status === "submitting" ? (
          <>
            <span aria-hidden className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Sending…
          </>
        ) : (
          <>
            Send enquiry
            <Icon name="arrow" className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
