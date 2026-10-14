import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

/*
 * OWNER REVIEW: General-purpose website terms. Before launch, Anvaddya should confirm with its legal adviser
 * the governing-law/jurisdiction wording and whether any additional terms apply to its business.
 * School partnerships themselves are governed by separate written agreements, not by these terms.
 */

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use | Anvaddya Orbit",
  description: "The terms that apply when you use the Anvaddya Orbit website.",
  path: "/terms",
});

const email = site.contact.email;

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      href="/terms"
      updated="13 October 2026"
      intro={
        <p>
          These terms apply to your use of this website, operated by {site.legalName} (&ldquo;{site.company}&rdquo;,
          &ldquo;we&rdquo;). By using the website you agree to them. If you don&apos;t agree, please don&apos;t use the site.
        </p>
      }
      sections={[
        {
          id: "about",
          title: "About this website",
          body: (
            <p>
              This website gives information about the {site.programme} programme and lets schools send a partnership
              enquiry. It does not create an agreement between you and {site.company}. Any school partnership is set out
              in a separate written agreement, which takes priority over anything on this website.
            </p>
          ),
        },
        {
          id: "information",
          title: "Programme information",
          body: (
            <>
              <p>
                We describe the programme as it is designed. Schedules, activities, events, and resources are agreed with
                each school and may differ from school to school. Project ideas marked as illustrative are examples, not
                records of completed student work.
              </p>
              <p>
                The programme does not guarantee admissions, examination results, or any particular academic or career
                outcome.
              </p>
            </>
          ),
        },
        {
          id: "acceptable-use",
          title: "Using the website",
          body: (
            <>
              <p>You agree not to:</p>
              <ul>
                <li>submit false information or enquiries on behalf of someone without their permission;</li>
                <li>send spam, automated submissions, or harmful code through the enquiry form;</li>
                <li>try to disrupt, overload, or gain unauthorised access to the website or its systems.</li>
              </ul>
            </>
          ),
        },
        {
          id: "ip",
          title: "Content and trademarks",
          body: (
            <p>
              The text, design, and graphics on this website, and the names {site.company} and {site.programme}, belong to{" "}
              {site.company} unless stated otherwise. You may view and share pages for personal or internal school use,
              but you may not copy or republish the content commercially without our written permission.
            </p>
          ),
        },
        {
          id: "links",
          title: "Links to other websites",
          body: (
            <p>
              Where this website links to other sites, we do so for convenience. We aren&apos;t responsible for their
              content or practices.
            </p>
          ),
        },
        {
          id: "liability",
          title: "Availability and liability",
          body: (
            <p>
              We work to keep the website accurate and available, but it is provided &ldquo;as is&rdquo; and may
              occasionally be unavailable or contain errors. To the extent permitted by law, {site.company} is not liable
              for losses arising from your use of, or inability to use, this website.
            </p>
          ),
        },
        {
          id: "privacy",
          title: "Privacy",
          body: (
            <p>
              How we handle information you send us is explained in our <Link href="/privacy">Privacy Policy</Link>.
            </p>
          ),
        },
        {
          id: "law",
          title: "Governing law",
          body: <p>These terms are governed by the laws of India.</p>,
        },
        {
          id: "changes",
          title: "Changes and contact",
          body: (
            <p>
              We may update these terms from time to time; the &ldquo;Last updated&rdquo; date shows the latest version.
              Questions about these terms can be sent to <a href={`mailto:${email}`}>{email}</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
