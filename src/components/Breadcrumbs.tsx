import Link from "next/link";
import { site } from "@/content/site";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";

export type Crumb = { label: string; href: string };

/** Visible breadcrumb trail + matching BreadcrumbList structured data. The last crumb is the current page. */
export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const items = [{ label: "Home", href: "/" }, ...trail];
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-soft">
          {items.map((c, i) => {
            const last = i === items.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className="font-semibold text-ink">
                    {c.label}
                  </span>
                ) : (
                  <>
                    <Link href={c.href} className="inline-block rounded py-1.5 underline-offset-4 hover:text-brand-700 hover:underline">
                      {c.label}
                    </Link>
                    <Icon name="chevron" className="h-3.5 w-3.5 -rotate-90 opacity-60" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            item: `${site.url}${c.href === "/" ? "" : c.href}`,
          })),
        }}
      />
    </>
  );
}
