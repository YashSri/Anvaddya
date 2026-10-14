import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

/*
 * OWNER REVIEW: This policy is written in general terms to match how the website actually works
 * (enquiry form → email via Resend; optional, consent-based Google Analytics; no accounts, no payments).
 * Before launch, Anvaddya should confirm with its legal adviser:
 *   - the data-retention period for enquiries (section "How long we keep it")
 *   - the name of the hosting provider, if it should be listed
 *   - whether a named grievance officer is required for its circumstances
 */

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Anvaddya Orbit",
  description:
    "How Anvaddya collects, uses, and protects information submitted through the Anvaddya Orbit website, including enquiry details and optional analytics cookies.",
  path: "/privacy",
});

const email = site.contact.email;

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      href="/privacy"
      updated="13 October 2026"
      intro={
        <p>
          This policy explains what information {site.legalName} (&ldquo;{site.company}&rdquo;, &ldquo;we&rdquo;)
          collects through this website, why we collect it, and the choices you have. This website is for schools and
          educators exploring the {site.programme} programme. It does not have user accounts and does not take payments.
        </p>
      }
      sections={[
        {
          id: "who-we-are",
          title: "Who we are",
          body: (
            <p>
              This website is operated by {site.legalName}, based in {site.contact.headquarters}, India. For any privacy
              question or request, email <a href={`mailto:${email}`}>{email}</a>.
            </p>
          ),
        },
        {
          id: "what-we-collect",
          title: "What we collect",
          body: (
            <>
              <h3>Information you give us</h3>
              <p>When you submit the partnership enquiry form, we receive:</p>
              <ul>
                <li>your name, work email address, and (optionally) phone number;</li>
                <li>your school or institution, your role, and its city and state;</li>
                <li>the classes you are interested in and any message you write;</li>
                <li>your confirmation that we may contact you about the enquiry.</li>
              </ul>
              <p>
                Please don&apos;t include personal information about students in the message field — we don&apos;t need it to
                respond to an enquiry.
              </p>
              <h3>Information collected automatically</h3>
              <p>
                Like most websites, our hosting provider records basic technical information when pages are requested,
                such as IP address, browser type, and the time of the request. This is used to keep the site secure and
                working, and to limit abuse of the enquiry form.
              </p>
              <p>
                If you accept analytics cookies, Google Analytics collects information about how the site is used — see{" "}
                <a href="#cookies">Cookies and analytics</a>.
              </p>
            </>
          ),
        },
        {
          id: "how-we-use-it",
          title: "How we use it",
          body: (
            <ul>
              <li>To reply to your enquiry and discuss a possible school partnership.</li>
              <li>To keep a record of our correspondence with your school.</li>
              <li>To protect the website and the enquiry form from spam and misuse.</li>
              <li>If you consent, to understand which pages are useful so we can improve the site.</li>
            </ul>
          ),
        },
        {
          id: "sharing",
          title: "Who we share it with",
          body: (
            <>
              <p>We don&apos;t sell personal information. We share it only with service providers that help us run this website:</p>
              <ul>
                <li>
                  <strong>Resend</strong> — delivers enquiry form submissions to our inbox by email.
                </li>
                <li>
                  <strong>Our website hosting provider</strong> — serves the website and processes form requests.
                </li>
                <li>
                  <strong>Google</strong> — only if you accept analytics cookies, to provide Google Analytics.
                </li>
              </ul>
              <p>
                These providers may process data outside India. We may also disclose information where required by law.
              </p>
            </>
          ),
        },
        {
          id: "retention",
          title: "How long we keep it",
          body: (
            <p>
              We keep enquiry details for as long as needed to respond to you and to manage any partnership discussion
              that follows, and then delete them. You can ask us to delete your enquiry at any time.
            </p>
          ),
        },
        {
          id: "cookies",
          title: "Cookies and analytics",
          body: (
            <>
              <p>
                This website does not use advertising or social-media tracking cookies, and it works fully without any
                cookies.
              </p>
              <p>
                Where analytics is enabled, we ask for your permission before loading Google Analytics. If you accept,
                Google Analytics sets cookies (named <code>_ga</code> and <code>_ga_*</code>) to distinguish visits and
                measure page use. If you decline, Google Analytics is not loaded.
              </p>
              <p>
                Your choice is saved in your browser&apos;s local storage so we don&apos;t ask again on every page. You can change it
                at any time with <strong>Cookie preferences</strong> in the website footer (shown when analytics is
                enabled), or by clearing this site&apos;s data in your browser. Withdrawing consent removes the analytics
                cookies.
              </p>
            </>
          ),
        },
        {
          id: "your-rights",
          title: "Your choices and rights",
          body: (
            <>
              <p>
                Depending on the law that applies to you — including India&apos;s Digital Personal Data Protection Act, 2023 —
                you may ask us to access, correct, or erase the personal information you have given us, or withdraw your
                consent.
              </p>
              <p>
                To make a request, email <a href={`mailto:${email}`}>{email}</a>. We may need to confirm your identity
                before acting on it.
              </p>
            </>
          ),
        },
        {
          id: "security",
          title: "Security",
          body: (
            <p>
              The website is served over an encrypted connection (HTTPS), and enquiry details are sent directly to our
              email provider rather than stored in a website database. No method of transmission is completely secure,
              but we take reasonable steps to protect the information you send us.
            </p>
          ),
        },
        {
          id: "children",
          title: "Children",
          body: (
            <p>
              This website is intended for school leaders, educators, and parents. It is not directed at children, and
              we don&apos;t knowingly collect personal information from children through it.
            </p>
          ),
        },
        {
          id: "changes",
          title: "Changes to this policy",
          body: (
            <p>
              We may update this policy as the website or the law changes. The &ldquo;Last updated&rdquo; date at the
              top shows when it was last revised. See also our <Link href="/terms">Terms of Use</Link>.
            </p>
          ),
        },
      ]}
    />
  );
}
