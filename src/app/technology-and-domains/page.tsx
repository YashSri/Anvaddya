import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { CtaBand, PageHero } from "@/components/blocks";
import { Explorer } from "@/components/Explorer";
import { RelatedPages } from "@/components/RelatedPages";
import { Accent, Section, SectionHeading } from "@/components/Section";
import { cta } from "@/content/site";
import { domains, tracks } from "@/content/tracks";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Technology & Real-World Domains | Anvaddya Orbit",
  description:
    "Five technology tracks — Robotics, IoT, AI & Data, Drones, and 3D Fabrication — applied across six real-world domains from agriculture to creative design.",
  path: "/technology-and-domains",
});

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Technology & Domains", href: "/technology-and-domains" }]}
        eyebrow="Technology & Domains"
        title={
          <>
            Explore technology. <Accent>Apply it</Accent> to the world.
          </>
        }
        intro="Orbit gives students opportunities to explore different technologies and apply them to meaningful problems. Students can begin with accessible, low-code or physical activities and progress toward more advanced technical work as their confidence grows."
      >
        <ButtonLink href="#tracks">See the five tracks</ButtonLink>
        <ButtonLink href="#domains" variant="secondary">
          {cta.domains.label}
        </ButtonLink>
      </PageHero>

      <Section id="tracks" labelledBy="tracks-title">
        <SectionHeading
          id="tracks-title"
          eyebrow="Technology tracks"
          title={
            <>
              Five tracks, <Accent>no gatekeepers</Accent>
            </>
          }
          intro="No prior software experience is required. Select a track to see what students explore and the kinds of projects it can lead to."
        />
        <div className="mt-14">
          <Explorer items={tracks} idPrefix="track" />
        </div>
      </Section>

      <Section id="domains" tone="cream" labelledBy="domains-title">
        <SectionHeading
          id="domains-title"
          eyebrow="Real-world domains"
          title={
            <>
              Six domains that give the <Accent>work a reason</Accent>
            </>
          }
          intro="Technology builds are grounded in an authentic problem area. Select a domain to see illustrative project ideas."
        />
        <div className="mt-14">
          <Explorer items={domains} idPrefix="domain" />
        </div>
        <p className="mt-10 max-w-3xl text-sm text-ink-soft">
          Project ideas shown on this page are illustrative examples of the kind of work the programme is designed to
          support. They are not records of completed student projects.
        </p>
      </Section>

      <RelatedPages from="technology" />
      <CtaBand />
    </>
  );
}
