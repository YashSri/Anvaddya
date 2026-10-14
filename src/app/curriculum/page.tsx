import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { CtaBand, PageHero } from "@/components/blocks";
import { Icon } from "@/components/Icon";
import { JourneySelector } from "@/components/JourneySelector";
import { RelatedPages } from "@/components/RelatedPages";
import { Accent, Section, SectionHeading } from "@/components/Section";
import { exploreHighlights, stages } from "@/content/journey";
import { cta } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Classes 1–12 Curriculum | Anvaddya Orbit",
  description:
    "Seven age-appropriate stages — Wonder, Mechanism, Explore, Discover, Sustain, Specialise, and Launch — from tactile curiosity in Class 1 to a documented capstone in Class 12.",
  path: "/curriculum",
});

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Curriculum", href: "/curriculum" }]}
        eyebrow="Curriculum · Classes 1–12"
        title={
          <>
            The right kind of <Accent>challenge</Accent> at every stage
          </>
        }
        intro="Students do not need to begin as coders or engineers. Orbit starts with observation and making, then gradually introduces systems, technology, research, and independent problem-solving."
      >
        <ButtonLink href={cta.primary.href}>{cta.primary.label}</ButtonLink>
        <ButtonLink href="#stages" variant="secondary">
          View all stages
        </ButtonLink>
      </PageHero>

      <Section tone="night" labelledBy="selector-title">
        <SectionHeading
          id="selector-title"
          eyebrow="Interactive journey"
          title={
            <>
              Select a <Accent>stage</Accent>
            </>
          }
          intro="Use the stages below — or your arrow keys — to move through the journey."
        />
        <div className="mt-14">
          <JourneySelector />
        </div>
      </Section>

      {/* Full static overview — every stage readable at a glance, without interaction */}
      <Section id="stages" labelledBy="stages-title">
        <SectionHeading
          id="stages-title"
          eyebrow="At a glance"
          title={
            <>
              Seven stages, <Accent>one</Accent> journey
            </>
          }
        />
        <div className="mt-12 overflow-hidden rounded-[var(--radius-card)] border border-line">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Anvaddya Orbit curriculum stages by class</caption>
            <thead className="hidden bg-night-900 text-white md:table-header-group">
              <tr>
                <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-[0.16em]">Stage</th>
                <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-[0.16em]">Focus</th>
                <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-[0.16em]">What it involves</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {stages.map((s) => (
                <tr key={s.id} className="block bg-white p-6 md:table-row md:p-0 even:bg-cream/60">
                  <th scope="row" className="block md:table-cell md:px-6 md:py-6 md:align-top">
                    <span className="block text-xs font-bold uppercase tracking-[0.16em] text-brand-700">{s.classes}</span>
                    <span className="display mt-1 block text-3xl font-normal">{s.name}</span>
                    {s.senior ? (
                      <span className="mt-2 inline-block rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-800">
                        Senior pathway
                      </span>
                    ) : null}
                  </th>
                  <td className="mt-3 block font-semibold md:table-cell md:px-6 md:py-6 md:align-top">{s.focus}</td>
                  <td className="mt-2 block leading-relaxed text-ink-soft md:table-cell md:px-6 md:py-6 md:align-top">
                    {s.involves.join(", ")}.
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="cream" labelledBy="explore-title">
        <SectionHeading
          id="explore-title"
          eyebrow="Middle school · Explore (Classes 6–8)"
          title={
            <>
              Structured thinking, <Accent>before</Accent> screens
            </>
          }
          intro="In middle school, students engage with real problems without screen fatigue or coding gatekeepers. A few examples of how ideas are introduced:"
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {exploreHighlights.map((h) => (
            <li key={h.title} className="reveal rounded-[var(--radius-card)] border border-line bg-white p-7">
              <h3 className="text-xl font-bold">{h.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{h.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="senior-title">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            id="senior-title"
            eyebrow="Senior school · Classes 9–12"
            title={
              <>
                A deeper pathway, <Accent>timed</Accent> around boards
              </>
            }
            intro="The senior-school arc is shaped around adolescent development and board commitments. Engagement is stronger in Classes 9 and 11, and lighter and fortnightly in Classes 10 and 12 so board preparation stays protected."
          />
          <ol className="grid gap-4 sm:grid-cols-2">
            {stages
              .filter((s) => s.senior)
              .map((s) => (
                <li key={s.id} className="reveal rounded-[var(--radius-card)] border border-line bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">{s.classes}</p>
                  <h3 className="display mt-2 text-3xl">{s.name}</h3>
                  <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-ink">
                    <Icon name="clock" className="h-4 w-4 text-brand-700" />
                    {s.rhythm}
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{s.summary}</p>
                </li>
              ))}
          </ol>
        </div>
        <p className="mt-10 max-w-3xl text-sm text-ink-soft">
          Exact schedules are agreed with each school and can pause during major board-exam periods.
        </p>
      </Section>

      <RelatedPages from="curriculum" />
      <CtaBand />
    </>
  );
}
