import type { Faq } from "@/content/faqs";
import { Icon } from "./Icon";

/** Native <details> accordion — accessible and works without JavaScript. */
export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left text-lg font-semibold text-ink transition-colors hover:text-brand-700 [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-brand-700 transition-transform duration-200 group-open:rotate-45 group-open:border-brand-700 group-open:bg-brand-700 group-open:text-white">
              <Icon name="plus" className="h-4 w-4" />
            </span>
          </summary>
          <p className="max-w-3xl pb-7 pr-12 leading-relaxed text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
