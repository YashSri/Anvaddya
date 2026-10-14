"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cta } from "@/content/site";
import { Icon } from "./Icon";

/**
 * Mobile-only bottom CTA. Appears after the visitor scrolls past the first screen,
 * hides on the contact page (where the form is), near the footer, and while the cookie banner is open.
 */
export function StickyCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.8;
      const footer = document.querySelector("footer");
      const nearFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
      const consentOpen = document.documentElement.hasAttribute("data-consent-open");
      setVisible(pastHero && !nearFooter && !consentOpen);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-consent-open"] });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, [pathname]);

  if (pathname === cta.primary.href) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 pt-3 backdrop-blur transition-transform duration-300 sm:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      aria-hidden={!visible}
    >
      <Link
        href={cta.primary.href}
        tabIndex={visible ? 0 : -1}
        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-6 font-semibold text-white"
      >
        {cta.primary.label}
        <Icon name="arrow" className="h-4 w-4" />
      </Link>
    </div>
  );
}
