import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Accent } from "@/components/Section";
import { explorePages, pages } from "@/content/pages";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Anvaddya Orbit" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="bg-cream">
      <div className="container-site py-20 sm:py-28">
        <p className="eyebrow">Error 404</p>
        <h1 className="display mt-4 max-w-4xl text-5xl sm:text-7xl">
          This page has drifted <Accent>out of orbit</Accent>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink-soft">
          The page you were looking for doesn&apos;t exist or may have moved. Try one of these instead.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Partner With Us
          </ButtonLink>
        </div>

        <h2 className="mt-16 text-xs font-bold uppercase tracking-[0.18em] text-ink">Popular pages</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {explorePages.map((k) => {
            const p = pages[k];
            return (
              <li key={k}>
                <Link
                  href={p.href}
                  className="group flex min-h-14 items-center justify-between gap-3 rounded-xl border border-line bg-white px-5 py-3.5 font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  {p.title}
                  <Icon name="arrow" className="h-4 w-4 shrink-0 text-brand-700 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
