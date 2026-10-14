import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { CheckList, CtaBand, IconCards, NumberedCards, PageHero } from "@/components/blocks";
import { RelatedPages } from "@/components/RelatedPages";
import { Accent, Section, SectionHeading } from "@/components/Section";
import { academicPriorities, deliveryModel, partnershipIncludes, partnershipSteps } from "@/content/schools";
import { cta } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "School Partnerships | Anvaddya Orbit",
  description:
    "A practical innovation programme designed around your school — structured sessions, dedicated facilitators, teacher collaboration, and a clear student-development pathway.",
  path: "/for-schools",
});

export default function ForSchoolsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "For Schools", href: "/for-schools" }]}
        eyebrow="For Schools"
        title={
          <>
            A practical innovation programme, designed around <Accent>your school</Accent>
          </>
        }
        intro="Anvaddya Orbit partners with schools to introduce sustained applied STEM and innovation learning through structured sessions, dedicated facilitators, teacher collaboration, and a clear student-development pathway."
      >
        <ButtonLink href={cta.primary.href}>{cta.primary.label}</ButtonLink>
        <ButtonLink href={cta.programme.href} variant="secondary">
          {cta.programme.label}
        </ButtonLink>
      </PageHero>

      <Section labelledBy="includes-title">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            id="includes-title"
            eyebrow="The partnership"
            title={
              <>
                What the partnership <Accent>includes</Accent>
              </>
            }
          />
          <div className="reveal rounded-2xl border border-line bg-cream p-8 sm:p-10">
            <CheckList items={partnershipIncludes} />
          </div>
        </div>
      </Section>

      <Section tone="cream" labelledBy="delivery-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              id="delivery-title"
              eyebrow="How delivery works"
              title={
                <>
                  Built to work <Accent>with</Accent> schools
                </>
              }
              intro="Orbit works with school teams to fit the programme into the academic environment. Dedicated facilitators, structured resources, teacher collaboration, and planned learning milestones help make delivery consistent across the year."
            />
          </div>
          <div className="lg:col-span-7">
            <NumberedCards items={deliveryModel} />
          </div>
        </div>
      </Section>

      <Section tone="night" labelledBy="priorities-title">
        <SectionHeading
          id="priorities-title"
          eyebrow="Designed to respect academic priorities"
          title={
            <>
              Protecting academics, <Accent>not</Accent> competing with them
            </>
          }
          intro="Orbit is intended to operate through suitable co-curricular, laboratory, and activity periods. Delivery can be adjusted around examination commitments, with lighter engagement for board classes and pauses during major board-exam periods as agreed with the school."
        />
        <div className="mt-14">
          <IconCards items={academicPriorities} />
        </div>
      </Section>

      <Section labelledBy="leadership-title">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            id="leadership-title"
            eyebrow="For school leadership"
            title={
              <>
                Make practical learning <Accent>visible</Accent>
              </>
            }
          />
          <div className="reveal space-y-4 text-lg leading-relaxed">
            <p>
              The programme gives schools a structured way to make practical learning visible, create opportunities for
              faculty collaboration, and communicate student work to families.
            </p>
            <p className="text-ink-soft">
              Implementation details are finalised with each school rather than assumed to be identical everywhere.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="cream" labelledBy="steps-title">
        <SectionHeading
          id="steps-title"
          eyebrow="Getting started"
          title={
            <>
              How a partnership <Accent>begins</Accent>
            </>
          }
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {partnershipSteps.map((s, i) => (
            <li key={s.title} className="reveal rounded-[var(--radius-card)] border border-line bg-white p-7">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
        <ButtonLink href={cta.primary.href} className="mt-12">
          {cta.primary.label}
        </ButtonLink>
      </Section>

      <RelatedPages from="forSchools" />
      <CtaBand />
    </>
  );
}
