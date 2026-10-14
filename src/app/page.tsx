import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/blocks";
import { Icon } from "@/components/Icon";
import { HeroSection } from "@/components/HeroSection";
import { TechnologyDomainsSection } from "@/components/domains/TechnologyDomainsSection";
import { WhatIsOrbitSection } from "@/components/what-is-orbit/WhatIsOrbitSection";
import { Accent, Section, SectionHeading } from "@/components/Section";
import { explorePages, pages } from "@/content/pages";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Anvaddya Orbit | Applied STEM & Innovation for Schools",
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* Premium Interactive Hero Section */}
      <HeroSection />

      {/* Premium Technology Domains Carousel + Impact Statistics Section */}
      <TechnologyDomainsSection />

      {/* “What Is Orbit?” — Premium Interactive Section */}
      <WhatIsOrbitSection />

      {/* Explore — one card per page */}
      <Section tone="night" labelledBy="explore-title">
        <SectionHeading
          id="explore-title"
          eyebrow="Explore Orbit"
          title={
            <>
              Find what <Accent>matters</Accent> to you
            </>
          }
          intro="Each part of the programme has its own page. Start wherever is most useful."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {explorePages.map((key) => pages[key]).map((p, i) => (
            <li key={p.href} className="reveal">
              <Link
                href={p.href}
                className="group flex h-full flex-col rounded-[var(--radius-card)] border border-white/10 bg-night-800 p-7 transition-colors hover:border-brand-400 hover:bg-night-700"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-brand-300 transition-colors group-hover:bg-brand-500 group-hover:text-ink">
                    <Icon name={p.icon} />
                  </span>
                  <span className="text-sm font-bold text-white/65">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="display mt-8 text-[1.75rem] leading-tight">{p.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-white/75">{p.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300">
                  Visit page
                  <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
