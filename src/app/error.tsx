"use client";

import Link from "next/link";
import { useEffect } from "react";
import { buttonClasses } from "@/components/Button";
import { site } from "@/content/site";

/** Route-level error boundary. Shows a friendly message — never technical details. */
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-cream">
      <div className="container-site py-20 sm:py-28">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="display mt-4 max-w-3xl text-5xl sm:text-6xl">We couldn&apos;t load this page.</h1>
        <p className="mt-6 max-w-xl text-lg text-ink-soft">
          This is usually temporary. Please try again — and if it keeps happening, email us at{" "}
          <a href={`mailto:${site.contact.email}`} className="font-semibold text-brand-700 underline underline-offset-2">
            {site.contact.email}
          </a>
          .
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={reset} className={`${buttonClasses.base} ${buttonClasses.primary}`}>
            Try again
          </button>
          <Link href="/" className={`${buttonClasses.base} ${buttonClasses.secondary}`}>
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
