import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { CtaBand, PageHero, Steps } from "@/components/blocks";
import { Icon } from "@/components/Icon";
import { RelatedPages } from "@/components/RelatedPages";
import { Accent, Section, SectionHeading } from "@/components/Section";
import { forgeLoop, seeTheScience, seeTheScienceExample, toolkit } from "@/content/learning";
import { cta } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "How We Learn | Anvaddya Orbit",
  description:
    "See-the-Science turns formulas into things students can observe and measure. The FORGE loop teaches students to understand a problem before rushing to a solution.",
  path: "/how-we-learn",
});

export default function HowWeLearnPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "How We Learn", href: "/how-we-learn" }]}
        eyebrow="How We Learn"
        title={
          <>
            Observe it. Build it. <Accent>Explain it.</Accent>
          </>
        }
        intro="Two simple methods run through the programme: See-the-Science, which connects formulas to measurable reality, and the FORGE loop, which teaches students to slow down and understand a problem before solving it."
      >
        <ButtonLink href="#see-the-science">See-the-Science</ButtonLink>
        <ButtonLink href="#forge" variant="secondary">
          The FORGE loop
        </ButtonLink>
      </PageHero>

      <Section id="see-the-science" labelledBy="sts-title">
        <SectionHeading
          id="sts-title"
          eyebrow="See-the-Science"
          title={
            <>
              Turn formulas into things you can <Accent>observe</Accent>
            </>
          }
          intro="A formula stops being a string to memorise when students have measured it for themselves."
        />
        <div className="mt-14">
          <Steps steps={seeTheScience} label="See-the-Science steps" />
        </div>

        <figure className="reveal mt-12 grid gap-8 rounded-2xl bg-cream p-7 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-800">
              Illustrative example
            </p>
            <h3 className="display mt-4 text-3xl sm:text-4xl">The pendulum, measured</h3>
            <figcaption className="mt-3 leading-relaxed text-ink-soft">
              A walk-through of how the five steps could play out in a single session.
            </figcaption>
          </div>
          <ol className="space-y-4 lg:col-span-8">
            {seeTheScienceExample.map((line, i) => (
              <li key={i} className="flex gap-4">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="pt-1 leading-relaxed">
                  <span className="font-semibold">{seeTheScience[i].step}: </span>
                  {line}
                </p>
              </li>
            ))}
          </ol>
        </figure>
      </Section>

      <Section id="forge" tone="night" labelledBy="forge-title">
        <SectionHeading
          id="forge-title"
          eyebrow="The FORGE problem-solving loop"
          title={
            <>
              Solve the problem <Accent>before</Accent> rushing to the solution
            </>
          }
          intro="Four moves that students repeat on every challenge — and get better at each time."
        />

        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4" aria-label="FORGE loop steps">
          {forgeLoop.map((s, i) => (
            <li key={s.step} className="reveal relative rounded-[var(--radius-card)] border border-white/10 bg-night-800 p-7">
              <span className="display text-5xl text-brand-400">{i + 1}</span>
              <h3 className="mt-5 text-xl font-bold">{s.step}</h3>
              <p className="mt-2 leading-relaxed text-white/70">{s.body}</p>
              {i < forgeLoop.length - 1 ? (
                <Icon name="arrow" className="absolute -right-4 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 rounded-full bg-brand-500 p-1 text-ink lg:block" />
              ) : null}
            </li>
          ))}
        </ol>

        <div className="mt-16">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-300">Supporting methods</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {toolkit.map((t) => (
              <li key={t.name} className="rounded-xl border border-white/10 p-5">
                <p className="font-bold">{t.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/65">{t.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="cream" labelledBy="alignment-title">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            id="alignment-title"
            eyebrow="Academic alignment"
            title={
              <>
                Designed to <Accent>complement</Accent> school learning
              </>
            }
          />
          <div className="reveal rounded-2xl border border-line bg-white p-8 sm:p-10">
            <p className="text-lg leading-relaxed">
              Orbit is designed to complement school learning. As a design principle, relevant builds are planned to
              connect with NCERT Physics, Chemistry, and Mathematics concepts that students meet in class.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              This describes how the programme is designed. It is not a claim of formal endorsement or accreditation by
              any board or authority.
            </p>
            <ButtonLink href={cta.primary.href} className="mt-8">
              {cta.primary.label}
            </ButtonLink>
          </div>
        </div>
      </Section>

      <RelatedPages from="howWeLearn" />
      <CtaBand />
    </>
  );
}
