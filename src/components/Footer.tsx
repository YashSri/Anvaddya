import Link from "next/link";
import { cta, footerColumns, site } from "@/content/site";
import { CookiePreferencesButton } from "./Analytics";
import { ButtonLink } from "./Button";
import { CurrentYear } from "./CurrentYear";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="on-night bg-night-950 text-white">
      <div className="container-site py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="display mt-6 max-w-md text-3xl text-white">
              From Curiosity to Capability. <em className="italic text-brand-400">From Capability to Evidence.</em>
            </p>
            <p className="mt-4 max-w-md text-white/70">
              A year-round applied STEM and innovation programme for schools, by {site.company}.
            </p>
            <ButtonLink href={cta.primary.href} variant="onNight" className="mt-8">
              {cta.primary.label}
            </ButtonLink>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            {footerColumns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-300">{col.title}</h2>
                <ul className="mt-4 space-y-1.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="inline-block py-1 text-white/80 transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-2">
          <a
            href={`mailto:${site.contact.email}`}
            className="flex items-start gap-3 text-white/85 transition-colors hover:text-white"
          >
            <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
            <span>
              <span className="block text-xs uppercase tracking-[0.18em] text-white/55">Partnership enquiries</span>
              {site.contact.email}
            </span>
          </a>
          <p className="flex items-start gap-3 text-white/85">
            <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
            <span>
              <span className="block text-xs uppercase tracking-[0.18em] text-white/55">Headquarters</span>
              {site.contact.headquarters}
            </span>
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p>{site.programme} is a programme by {site.company}.</p>
            <CookiePreferencesButton className="underline underline-offset-4 transition-colors hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
}
