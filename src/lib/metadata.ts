import type { Metadata } from "next";
import { site } from "@/content/site";

/** Per-page metadata with canonical URL and Open Graph/Twitter tags. */
export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    // Page-level openGraph replaces (doesn't merge with) the root image, so set it explicitly.
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.programme,
      type: "website",
      locale: "en_IN",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.programme} — ${site.tagline}` }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/twitter-image"] },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}
