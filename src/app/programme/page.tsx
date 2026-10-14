import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/Button";
import { CtaBand, IconCards, NumberedCards } from "@/components/blocks";
import { Icon, type IconName } from "@/components/Icon";
import { RelatedPages } from "@/components/RelatedPages";
import { Accent, Section, SectionHeading } from "@/components/Section";
import { graduateProfile } from "@/content/outcomes";
import { challenges, ecosystem } from "@/content/schools";
import { cta } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "The Orbit Programme | Anvaddya",
  description:
    "Anvaddya Orbit is a year-round applied learning layer that complements school academics — with hands-on projects, dedicated facilitators, and portfolio-based evidence.",
  path: "/programme",
});

const blocks: { title: string; body: string; icon: IconName }[] = [
  {
    title: "What Orbit is",
    body: "A year-round applied learning layer designed to complement school academics.",
    icon: "compass",
  },
  {
    title: "How it is delivered",
    body: "Scheduled school sessions, dedicated facilitators, teacher coordination, and structured resources.",
    icon: "calendar",
  },
  {
    title: "How it progresses",
    body: "Foundational curiosity in early grades; systems thinking in middle school; domain exploration, specialisation, and capstones in senior school.",
    icon: "network",
  },
  {
    title: "How learning is documented",
    body: "Portfolios, project artefacts, presentations, research, and competency rubrics.",
    icon: "folder",
  },
];

const notList = [
  "Not a promise of guaranteed admissions",
  "Not a certificate-only programme",
  "Not a replacement for core school subjects",
  "Not a one-off workshop or short-term event",
];

const principles: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Independent problem solvers",
    body: "Free thinking anchored in scientific rigour. We cultivate problem solvers rather than attaching career labels early.",
    icon: "compass",
  },
  {
    title: "Agency over a forced path",
    body: "Entrepreneurship is treated as a mindset of agency and creation — not a destination every student must choose.",
    icon: "bulb",
  },
  {
    title: "Integrity first",
    body: "No inflated promises and no shortcuts. What we describe is what students actually do, backed by the work itself.",
    icon: "scale",
  },
];

export default function ProgrammePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full border border-brand-200" />
        <div className="container-site relative py-16 sm:py-20 lg:py-24">
          <div className="mb-8">
            <Breadcrumbs trail={[{ label: "The Programme", href: "/programme" }]} />
          </div>
          <p className="eyebrow">
            <span aria-hidden className="h-px w-6 bg-current opacity-60" />
            The Programme
          </p>
          <h1 className="display mt-5 max-w-5xl text-[2.6rem] sm:text-6xl lg:text-7xl">
            A connected journey from <Accent>exploration</Accent> to independent work
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            Orbit combines age-appropriate learning, hands-on practice, technical exploration, real-world challenges, and
            evidence of student development. The level of complexity grows as students progress through school.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={cta.primary.href}>{cta.primary.label}</ButtonLink>
            <ButtonLink href={cta.journey.href} variant="secondary">
              {cta.journey.label}
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section labelledBy="challenge-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              id="challenge-title"
              eyebrow="The challenge"
              title={
                <>
                  Learning should go <Accent>beyond</Accent> the textbook
                </>
              }
              intro="Students build important academic foundations at school. Orbit adds a structured opportunity to apply those foundations: to test ideas, work through constraints, learn from failure, and explore fields before making important academic choices."
            />
          </div>
          <div className="lg:col-span-7">
            <NumberedCards items={challenges} />
          </div>
        </div>
      </Section>

      <Section tone="cream" labelledBy="core-title">
        <SectionHeading
          id="core-title"
          eyebrow="The model"
          title={
            <>
              One programme, <Accent>year-round</Accent>
            </>
          }
          intro="Orbit is a continuous, school-embedded programme — not a one-off event. Here is how it fits together."
        />
        <div className="mt-14">
          <IconCards items={blocks} />
        </div>
      </Section>

      <Section tone="night" labelledBy="not-title">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            id="not-title"
            eyebrow="Clear boundaries"
            title={
              <>
                What Orbit is <Accent>not</Accent>
              </>
            }
            intro="Being clear about what we don't promise is part of how we earn trust with schools and families."
          />
          <ul className="grid gap-3">
            {notList.map((item) => (
              <li key={item} className="reveal flex items-center gap-4 rounded-xl border border-white/10 bg-night-800 px-5 py-4 text-lg">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-300">
                  <Icon name="close" className="h-4 w-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="cream" labelledBy="principles-title">
        <SectionHeading
          id="principles-title"
          eyebrow="Guiding philosophy"
          title={
            <>
              Rigour without narrow <Accent>career boxes</Accent>
            </>
          }
          intro="Students should remain students: curious, rigorous, adaptable, and with genuine agency."
        />
        <div className="mt-14">
          <IconCards items={principles} columns={3} />
        </div>
      </Section>

      <Section labelledBy="profile-title">
        <SectionHeading
          id="profile-title"
          eyebrow="Who students grow into"
          title={
            <>
              Six capabilities the programme is <Accent>designed</Accent> to develop
            </>
          }
          intro="These describe what the senior-school journey aims to build. Every student's path is different, and growth shows up in their own documented work."
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {graduateProfile.map((g, i) => (
            <li key={g.name} className="bg-white p-7">
              <span className="text-sm font-bold text-brand-700">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display mt-3 text-3xl">{g.name}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{g.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="cream" labelledBy="ecosystem-title">
        <SectionHeading
          id="ecosystem-title"
          eyebrow="The ecosystem"
          title={
            <>
              No one left <Accent>outside</Accent> the loop
            </>
          }
          intro="Orbit involves the whole school community, so student work is seen, supported, and questioned."
        />
        <div className="mt-14">
          <IconCards items={ecosystem} />
        </div>
      </Section>

      <RelatedPages from="programme" />
      <CtaBand />
    </>
  );
}
