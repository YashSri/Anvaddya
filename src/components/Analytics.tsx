"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import {
  CONSENT_CHANGE_EVENT,
  CONSENT_OPEN_EVENT,
  GA_MEASUREMENT_ID,
  analyticsEnabled,
  clearAnalyticsCookies,
  readConsent,
  writeConsent,
  type ConsentChoice,
} from "@/lib/analytics";
import { buttonClasses } from "./Button";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Google Analytics 4 + consent banner. Renders nothing at all unless a measurement ID is configured,
 * so no banner is shown for cookies the site does not use.
 */
export function Analytics() {
  const [consent, setConsent] = useState<ConsentChoice | null>(null);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    if (!analyticsEnabled) return;
    const stored = readConsent();
    setConsent(stored);
    setBannerOpen(stored === null);

    const onChange = (e: Event) => setConsent((e as CustomEvent<ConsentChoice>).detail);
    const onOpen = () => setBannerOpen(true);
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
    window.addEventListener(CONSENT_OPEN_EVENT, onOpen);
    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
      window.removeEventListener(CONSENT_OPEN_EVENT, onOpen);
    };
  }, []);

  // Let other bottom-fixed UI (the mobile CTA bar) step aside while the banner is visible.
  useEffect(() => {
    document.documentElement.toggleAttribute("data-consent-open", bannerOpen);
  }, [bannerOpen]);

  if (!analyticsEnabled) return null;

  const choose = (choice: ConsentChoice) => {
    if (choice === "denied" && consent === "granted") {
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
      clearAnalyticsCookies();
    }
    writeConsent(choice);
    setBannerOpen(false);
  };

  return (
    <>
      {consent === "granted" ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});gtag('config','${GA_MEASUREMENT_ID}');`}
          </Script>
        </>
      ) : null}

      {bannerOpen ? (
        <div
          role="region"
          aria-label="Cookie preferences"
          className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl rounded-2xl border border-line bg-white p-5 shadow-2xl shadow-night-900/20 sm:inset-x-6 sm:bottom-6 sm:p-6"
          style={{ marginBottom: "env(safe-area-inset-bottom)" }}
        >
          <p className="font-semibold text-ink">Help us understand how this site is used</p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
            With your permission we use Google Analytics cookies to count visits and see which pages are useful. We
            don&apos;t use advertising cookies. You can change your choice at any time from the footer.{" "}
            <Link href="/privacy#cookies" className="font-semibold text-brand-700 underline underline-offset-2">
              Cookie details
            </Link>
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <button type="button" onClick={() => choose("granted")} className={`${buttonClasses.base} ${buttonClasses.primary} !min-h-11 !py-2.5`}>
              Accept analytics
            </button>
            <button type="button" onClick={() => choose("denied")} className={`${buttonClasses.base} ${buttonClasses.secondary} !min-h-11 !py-2.5`}>
              Decline
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

/** Footer control to reopen the consent banner. Hidden when analytics is not configured. */
export function CookiePreferencesButton({ className = "" }: { className?: string }) {
  if (!analyticsEnabled) return null;
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))} className={className}>
      Cookie preferences
    </button>
  );
}
