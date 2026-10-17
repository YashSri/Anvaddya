import type { Metadata } from "next";
import { CtaBand } from "@/components/blocks";
import { HeroSection } from "@/components/HeroSection";
import { TechnologyDomainsSection } from "@/components/domains/TechnologyDomainsSection";
import { WhatIsOrbitSection } from "@/components/what-is-orbit/WhatIsOrbitSection";
import { ExploreOrbitSection } from "@/components/explore/ExploreOrbitSection";
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

      {/* Premium “Explore Orbit” Section — Interactive Cards, Text Reveals & Motion */}
      <ExploreOrbitSection />

      <CtaBand />
    </>
  );
}
