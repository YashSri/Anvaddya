import Link from "next/link";
import { pages, related, type PageKey } from "@/content/pages";
import { Icon } from "./Icon";

/** "Keep exploring" — meaningful next steps so no page is a dead end. */
export function RelatedPages({ from }: { from: PageKey }) {
  const keys = related[from];
  if (!keys?.length) return null;
  return (
    <section aria-labelledby="related-title" className="border-t border-line bg-white py-16 sm:py-20">
      <div className="container-site">
        <h2 id="related-title" className="eyebrow">
          <span aria-hidden className="h-px w-6 bg-current opacity-60" />
          Keep exploring
        </h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {keys.map((k) => {
            const p = pages[k];
            return (
              <li key={k}>
                <Link
                  href={p.href}
                  className="group flex h-full items-start gap-4 rounded-[var(--radius-card)] border border-line bg-white p-6 transition-colors hover:border-brand-300 hover:bg-cream"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="flex items-center justify-between gap-2 text-lg font-bold text-ink">
                      {p.title}
                      <Icon name="arrow" className="h-4 w-4 shrink-0 text-brand-700 transition-transform group-hover:translate-x-0.5" />
                    </span>
                    <span className="mt-1 block leading-relaxed text-ink-soft">{p.summary}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
