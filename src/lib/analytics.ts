/**
 * Analytics configuration.
 *
 * Google Analytics 4 is OFF unless NEXT_PUBLIC_GA_MEASUREMENT_ID is set (e.g. "G-XXXXXXXXXX").
 * When set, GA loads only after the visitor accepts analytics cookies in the consent banner.
 * The measurement ID is public by design — it is not a secret.
 */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";
export const analyticsEnabled = /^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID);

export type ConsentChoice = "granted" | "denied";

const STORAGE_KEY = "orbit-analytics-consent";
export const CONSENT_CHANGE_EVENT = "orbit:consent-change";
export const CONSENT_OPEN_EVENT = "orbit:consent-open";

export function readConsent(): ConsentChoice | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function writeConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Storage unavailable (private mode etc.) — the choice still applies for this page view.
  }
  window.dispatchEvent(new CustomEvent<ConsentChoice>(CONSENT_CHANGE_EVENT, { detail: choice }));
}

/** Removes Google Analytics cookies after consent is withdrawn. */
export function clearAnalyticsCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  for (const c of document.cookie.split(";")) {
    const name = c.split("=")[0]?.trim();
    if (!name || !(name === "_ga" || name.startsWith("_ga_") || name === "_gid")) continue;
    for (const d of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
    }
  }
}
