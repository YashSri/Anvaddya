import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";

export type LegalSection = { id: string; title: string; body: ReactNode };

/** Readable, mobile-friendly layout for legal pages, with an on-page table of contents. */
export function LegalPage({
  title,
  href,
  updated,
  intro,
  sections,
}: {
  title: string;
  href: string;
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="bg-cream">
        <div className="container-site py-14 sm:py-20">
          <Breadcrumbs trail={[{ label: title, href }]} />
          <h1 className="display mt-8 text-5xl sm:text-6xl">{title}</h1>
          <p className="mt-4 text-sm font-semibold text-ink-soft">Last updated: {updated}</p>
          <div className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">{intro}</div>
        </div>
      </section>
      <section className="bg-white py-14 sm:py-20">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <nav aria-label="On this page" className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-ink">On this page</h2>
              <ol className="mt-3 space-y-1 text-[0.95rem]">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="inline-block py-1 text-ink-soft underline-offset-4 hover:text-brand-700 hover:underline">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>
          <div className="legal max-w-3xl lg:col-span-9">
            {sections.map((s) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`}>
                <h2 id={`${s.id}-title`}>{s.title}</h2>
                {s.body}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
