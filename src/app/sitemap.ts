import type { MetadataRoute } from "next";
import { pages } from "@/content/pages";
import { site } from "@/content/site";

/** Generated from the page registry so sitemap.xml always matches real, indexable routes. */
export default function sitemap(): MetadataRoute.Sitemap {
  const legal = new Set(["/privacy", "/terms"]);
  return [
    { url: `${site.url}/`, changeFrequency: "monthly", priority: 1 },
    ...Object.values(pages).map((p) => ({
      url: `${site.url}${p.href}`,
      changeFrequency: (legal.has(p.href) ? "yearly" : "monthly") as "yearly" | "monthly",
      priority: p.href === "/contact" ? 0.9 : legal.has(p.href) ? 0.3 : 0.7,
    })),
  ];
}
