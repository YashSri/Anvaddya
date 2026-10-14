import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { CtaBand, PageHero } from "@/components/blocks";
import { Icon } from "@/components/Icon";
import { RelatedPages } from "@/components/RelatedPages";
import { Accent, Section, SectionHeading } from "@/components/Section";
import { competencies, portfolioItems } from "@/content/outcomes";
import { cta } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Student Outcomes & Portfolios | Anvaddya Orbit",
  description:
    "How learning becomes visible: portfolio-based evidence and six competencies — communication, critical thinking, systems thinking, collaboration, creativity, and technical making.",
  path: "/student-outcomes",
});

const rhythm = [
  {
    when: "Start of year",
    title: "A baseline",
    body: "Students reflect on where they are, alongside facilitator observations, so growth can be seen later.",
  },
  {
    when: "Through the year",
    title: "Documented work",
    body: "Artefacts, test results, and reflections are added as projects progress — including what didn't work.",
  },
  {
    when: "Showcase season",
    title: "A reviewed selection",
    body: "Students curate their strongest work and explain it to reviewers who ask questions about method and reasoning.",
  },
];

export default function OutcomesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Student Outcomes", href: "/student-outcomes" }]}
        eyebrow="Student Outcomes"
        title={
          <>
            Progress you can see. Skills students can <Accent>demonstrate.</Accent>
          </>
        }
        intro="Orbit emphasises practical evidence: students document what they tried, what worked, what failed, what they learned, and how their thinking changed."
      >
        <ButtonLink href={cta.primary.href}>{cta.primary.label}</ButtonLink>
        <ButtonLink href="/stream-choice" variant="secondary">
          How evidence informs choices
        </ButtonLink>
      </PageHero>

      <Section labelledBy="portfolio-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              id="portfolio-title"
              eyebrow="The portfolio"
              title={
                <>
                  What a portfolio <Accent>may include</Accent>
                </>
              }
              intro="A portfolio is a growing record of real work. Its contents vary by stage and project."
            />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {portfolioItems.map((item, i) => (
              <li key={item} className="reveal flex items-start gap-4 rounded-xl border border-line bg-white p-5">
                <span className="display text-2xl leading-none text-brand-600">{String(i + 1).padStart(2, "0")}</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="night" labelledBy="competency-title">
        <SectionHeading
          id="competency-title"
          eyebrow="Competencies"
          title={
            <>
              Six competencies, seen through <Accent>real work</Accent>
            </>
          }
          intro="Progress is reviewed against a competency rubric, using the evidence in each student's portfolio."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {competencies.map((c) => (
            <li key={c.name} className="reveal rounded-[var(--radius-card)] border border-white/10 bg-night-800 p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-brand-300">
                <Icon name={c.icon} />
              </span>
              <h3 className="mt-5 text-xl font-bold">{c.name}</h3>
              <p className="mt-2 text-white/70">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-300">Shows up in · </span>
                {c.evidence}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="cream" labelledBy="rhythm-title">
        <SectionHeading
          id="rhythm-title"
          eyebrow="Assessment rhythm"
          title={
            <>
              Portfolio-based, <Accent>not</Accent> test-based
            </>
          }
          intro="The proposed model reviews progress through artefacts, demonstrations, presentations, and reflection rather than relying only on written tests."
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {rhythm.map((r) => (
            <li key={r.title} className="reveal rounded-[var(--radius-card)] border-t-4 border-brand-500 bg-white p-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">{r.when}</p>
              <h3 className="display mt-3 text-3xl">{r.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{r.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-ink-soft">
          Orbit&apos;s portfolio and rubric are designed to document learning. They are not a formal credential, and the
          programme does not promise external recognition or any admission advantage.
        </p>
      </Section>

      <RelatedPages from="outcomes" />
      <CtaBand />
    </>
  );
}
