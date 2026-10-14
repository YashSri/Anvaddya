import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { CheckList, CtaBand, IconCards, PageHero } from "@/components/blocks";
import type { IconName } from "@/components/Icon";
import { RelatedPages } from "@/components/RelatedPages";
import { Accent, Section, SectionHeading } from "@/components/Section";
import { cta } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Stream Choice & Future Pathways | Anvaddya Orbit",
  description:
    "The Stream Choice Studio helps students and families reflect on two years of documented project work before choosing subjects — guidance and reflection, not a prediction.",
  path: "/stream-choice",
});

const studioPoints = [
  "Review accumulated project artefacts and reflections.",
  "Identify patterns of interest and sustained engagement.",
  "Discuss how those patterns may relate to possible subject combinations across Science, Commerce, and Arts.",
  "Support a calm conversation among student, family, and facilitator before key school deadlines.",
];

const studioParts: { title: string; body: string; icon: IconName }[] = [
  {
    title: "A two-year review",
    body: "Bringing together project work from Classes 9 and 10 to see where engagement was genuine and sustained.",
    icon: "folder",
  },
  {
    title: "Interests to subjects",
    body: "Exploring how the kinds of problems a student enjoys might connect to subject combinations — as options, not answers.",
    icon: "network",
  },
  {
    title: "A calm family conversation",
    body: "A facilitator sits with the student and family to talk through options well before pre-board pressure peaks.",
    icon: "people",
  },
];

export default function StreamChoicePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Stream Choice & Pathways", href: "/stream-choice" }]}
        eyebrow="Stream Choice & Future Pathways"
        title={
          <>
            Make important choices with more than <Accent>guesswork</Accent>
          </>
        }
        intro="The Stream Choice Studio brings together a student's project experiences across Classes 9 and 10. The aim is to help the student and family reflect on sustained interests, demonstrated engagement, and the kinds of problems the student enjoys solving."
      >
        <ButtonLink href={cta.primary.href}>{cta.primary.label}</ButtonLink>
        <ButtonLink href="/student-outcomes" variant="secondary">
          How portfolios work
        </ButtonLink>
      </PageHero>

      <Section labelledBy="studio-title">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            id="studio-title"
            eyebrow="The Stream Choice Studio"
            title={
              <>
                What the studio <Accent>does</Accent>
              </>
            }
          />
          <div className="reveal rounded-2xl border border-line bg-cream p-8 sm:p-10">
            <CheckList items={studioPoints} />
          </div>
        </div>
        <div className="mt-14">
          <IconCards items={studioParts} columns={3} />
        </div>
      </Section>

      <Section tone="night" labelledBy="important-title">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Important</p>
          <h2 id="important-title" className="display mt-4 text-4xl sm:text-5xl">
            Guidance and reflection, <Accent>not</Accent> an algorithm
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            The studio does not determine a student&apos;s future or guarantee success in any particular stream. It gives
            students and families better evidence to think with — the decision remains theirs.
          </p>
        </div>
      </Section>

      <Section tone="cream" labelledBy="beyond-title">
        <SectionHeading
          id="beyond-title"
          eyebrow="Classes 11–12"
          title={
            <>
              From specialisation to a <Accent>documented</Accent> portfolio
            </>
          }
          intro="After stream choice, students go deeper: research-led projects in Class 11, then a capstone, expert review, and a presentation or viva in Class 12 — finishing with a documented portfolio they can use to reflect on their next steps."
        />
        <ButtonLink href="/curriculum" variant="secondary" className="mt-10">
          {cta.journey.label}
        </ButtonLink>
      </Section>

      <RelatedPages from="streamChoice" />
      <CtaBand />
    </>
  );
}
