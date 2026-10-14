import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { CtaBand, PageHero } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { cta } from "@/content/site";
import { FaqAccordion } from "@/components/FaqAccordion";
import { RelatedPages } from "@/components/RelatedPages";
import { Accent, Section } from "@/components/Section";
import { faqs } from "@/content/faqs";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions | Anvaddya Orbit",
  description:
    "Answers to common questions about Anvaddya Orbit — coding experience, homework, how progress is evaluated, and how schools can explore a partnership.",
  path: "/faq",
});

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero
        crumbs={[{ label: "FAQ", href: "/faq" }]}
        eyebrow="FAQ"
        title={
          <>
            Questions, <Accent>answered</Accent> plainly
          </>
        }
        intro="If your question isn't here, send it with a partnership enquiry and the team will respond."
      >
        <ButtonLink href={cta.primary.href}>Ask us directly</ButtonLink>
      </PageHero>
      <Section>
        <div className="mx-auto max-w-4xl">
          <FaqAccordion faqs={faqs} />
        </div>
      </Section>
      <RelatedPages from="faq" />
      <CtaBand />
    </>
  );
}
