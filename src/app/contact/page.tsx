import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Icon } from "@/components/Icon";
import { Accent } from "@/components/Section";
import { partnershipSteps } from "@/content/schools";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Partner With Anvaddya Orbit",
  description:
    "Tell us about your school and what you would like to explore. The Anvaddya team will follow up to discuss programme fit, scheduling, and next steps.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full border border-brand-200" />
      <div className="container-site relative grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <div className="mb-8">
            <Breadcrumbs trail={[{ label: "Partner With Us", href: "/contact" }]} />
          </div>
          <p className="eyebrow">
            <span aria-hidden className="h-px w-6 bg-current opacity-60" />
            Partner With Us
          </p>
          <h1 className="display mt-5 text-[2.6rem] sm:text-6xl">
            Let&apos;s explore what Orbit could look like at <Accent>your school</Accent>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Tell us a little about your school and what you would like to explore. The {site.company} team can follow up
            to discuss programme fit, academic scheduling, student age groups, and potential next steps.
          </p>

          <h2 className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-ink">What happens next</h2>
          <ol className="mt-5 space-y-5">
            {partnershipSteps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold">{s.title}</p>
                  <p className="mt-0.5 text-[0.95rem] leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 space-y-4 border-t border-line pt-8">
            <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 font-semibold text-ink hover:text-brand-700">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-700">
                <Icon name="mail" className="h-5 w-5" />
              </span>
              {site.contact.email}
            </a>
            <p className="flex items-center gap-3 text-ink">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-700">
                <Icon name="pin" className="h-5 w-5" />
              </span>
              {site.contact.headquarters}
            </p>
          </div>

          <p className="mt-8 text-sm text-ink-soft">
            Have a question first? Read the{" "}
            <Link href="/faq" className="font-semibold text-brand-700 underline underline-offset-2">
              frequently asked questions
            </Link>
            .
          </p>
        </div>

        <div className="lg:col-span-7">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
