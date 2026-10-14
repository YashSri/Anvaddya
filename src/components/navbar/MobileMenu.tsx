"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, MapPin, Mail, X } from "lucide-react";
import { cta, site } from "@/content/site";

type MobileNavItem = {
  index: string;
  label: string;
  href: string;
  description: string;
};

const MOBILE_NAV_ITEMS: MobileNavItem[] = [
  { index: "01", label: "The Programme", href: "/programme", description: "A year-round STEM layer for schools" },
  { index: "02", label: "Curriculum Journey", href: "/curriculum", description: "Classes 1–12 stage by stage" },
  { index: "03", label: "How We Learn", href: "/how-we-learn", description: "See-the-Science and the FORGE loop" },
  { index: "04", label: "Stream Choice", href: "/stream-choice", description: "Evidence-driven reflections for senior school" },
  { index: "05", label: "Technology & Domains", href: "/technology-and-domains", description: "STEM, Robotics, IoT, AI, and Research" },
  { index: "06", label: "Student Outcomes", href: "/student-outcomes", description: "Portfolios, competencies, and graduate profile" },
  { index: "07", label: "For Schools", href: "/for-schools", description: "Integration model, lab design, and facilitators" },
  { index: "08", label: "Events & Hackathons", href: "/events", description: "Orbit Ideathon, camps, and masterclasses" },
  { index: "09", label: "FAQ", href: "/faq", description: "Frequently asked questions for leadership" },
];

export function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 flex justify-end lg:hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#111111]/45 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div
        ref={drawerRef}
        className="relative z-10 flex h-full w-full max-w-md flex-col justify-between border-l border-[#E5E7EB] bg-[#FCFBF8] p-6 shadow-2xl transition-transform duration-300 ease-out"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-none bg-[#FF6A00]" aria-hidden="true" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#111111]">
              Directory Index
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111111] transition-colors hover:border-[#111111] hover:text-[#FF6A00]"
            aria-label="Close navigation drawer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Links List with Staggered Visual Feel */}
        <nav aria-label="Mobile Directory" className="my-4 flex-1 overflow-y-auto pr-1">
          <ul className="divide-y divide-[#E5E7EB]">
            {MOBILE_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group flex min-h-[48px] items-baseline justify-between py-3 transition-colors hover:pl-1.5"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-[#6B7280] group-hover:text-[#FF6A00]">
                      {item.index}
                    </span>
                    <div>
                      <span className="text-base font-semibold text-[#111111] group-hover:text-[#FF6A00] transition-colors">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-[#6B7280]">
                        {item.description}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-[#6B7280] opacity-0 transition-all group-hover:translate-x-1 group-hover:text-[#FF6A00] group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Details & CTA */}
        <div className="border-t border-[#E5E7EB] pt-4">
          <div className="mb-4 flex flex-col gap-1.5 font-mono text-xs text-[#6B7280]">
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-[#FF6A00]" />
              <span>{site.contact.headquarters}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-[#FF6A00]" />
              <a href={`mailto:${site.contact.email}`} className="hover:text-[#111111]">
                {site.contact.email}
              </a>
            </div>
          </div>

          <Link
            href={cta.primary.href}
            onClick={onClose}
            className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[10px] bg-[#FF6A00] px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#E65F00]"
          >
            <span>Discuss a School Partnership</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
