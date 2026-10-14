import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { CtaBand, PageHero } from "@/components/blocks";
import { RelatedPages } from "@/components/RelatedPages";
import { Accent, Section, SectionHeading } from "@/components/Section";
import { events, masterclassFields } from "@/content/events";
import { cta } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Events & Experiences | Anvaddya Orbit",
  description:
    "The rhythm of the Orbit year: Summer Innovation Camp, October Challenge Camp, the January Innovation Expo & Symposium, and monthly Practitioner Masterclasses.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Events & Experiences", href: "/events" }]}
        eyebrow="Events & Experiences"
        title={
          <>
            A year with <Accent>moments</Accent> to share the work
          </>
        }
        intro="Signature formats give students regular opportunities to build intensively, collaborate across grades, and present their work to real audiences."
      >
        <ButtonLink href={cta.primary.href}>{cta.primary.label}</ButtonLink>
      </PageHero>

      <Section labelledBy="formats-title">
        <SectionHeading
          id="formats-title"
          eyebrow="Programme formats"
          title={
            <>
              Four signature <Accent>formats</Accent>
            </>
          }
          intro="These are planned programme components. Dates and details are confirmed with each partner school."
        />

        <ol className="relative mt-14 space-y-6 before:absolute before:bottom-0 before:left-[1.1rem] before:top-0 before:w-px before:bg-line md:before:left-1/2">
          {events.map((e, i) => (
            <li key={e.id} className="reveal relative grid gap-6 pl-12 md:grid-cols-2 md:gap-12 md:pl-0">
              <span
                aria-hidden
                className="absolute left-2 top-8 h-5 w-5 rounded-full border-4 border-white bg-brand-500 shadow md:left-1/2 md:-translate-x-1/2"
              />
              <div className={i % 2 === 1 ? "md:order-2" : "md:text-right"}>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-700 md:pt-7">{e.when}</p>
              </div>
              <article className={`rounded-[var(--radius-card)] border border-line bg-white p-7 shadow-sm ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="display text-3xl sm:text-4xl">{e.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{e.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <li key={t} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="night" labelledBy="masterclass-title">
        <SectionHeading
          id="masterclass-title"
          eyebrow="Practitioner Masterclasses"
          title={
            <>
              Real challenges from people who <Accent>do the work</Accent>
            </>
          }
          intro="Monthly structured sessions are designed to draw on practitioners from fields like these."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {masterclassFields.map((m) => (
            <li key={m.title} className="reveal rounded-[var(--radius-card)] border border-white/10 bg-night-800 p-7">
              <h3 className="text-lg font-bold text-brand-300">{m.title}</h3>
              <p className="mt-2 leading-relaxed text-white/75">{m.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <RelatedPages from="events" />
      <CtaBand />
    </>
  );
}
