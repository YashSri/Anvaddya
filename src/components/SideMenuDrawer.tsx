"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { X, ArrowRight, Mail, MapPin } from "lucide-react";
import { cta, site } from "@/content/site";

type MenuItem = {
  index: string;
  label: string;
  href: string;
  tagline: string;
};

const MENU_ITEMS: MenuItem[] = [
  { index: "01", label: "The Programme", href: "/programme", tagline: "Year-round STEM layer for schools" },
  { index: "02", label: "Curriculum Journey", href: "/curriculum", tagline: "Stages across Classes 1 to 12" },
  { index: "03", label: "How We Learn", href: "/how-we-learn", tagline: "See-the-Science & the FORGE loop" },
  { index: "04", label: "Stream Choice", href: "/stream-choice", tagline: "Evidence-driven academic pathways" },
  { index: "05", label: "Technology & Domains", href: "/technology-and-domains", tagline: "STEM, Robotics, IoT, AI & Research" },
  { index: "06", label: "Student Outcomes", href: "/student-outcomes", tagline: "Verified portfolios & competencies" },
  { index: "07", label: "For Schools", href: "/for-schools", tagline: "Leadership, infrastructure & facilitators" },
  { index: "08", label: "Events & Hackathons", href: "/events", tagline: "Ideathons, expos & masterclasses" },
  { index: "09", label: "Frequently Asked Questions", href: "/faq", tagline: "Direct answers for educators & parents" },
];

export function SideMenuDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 flex justify-end"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#111111]/45 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        ref={drawerRef}
        className="relative z-10 flex h-full w-full max-w-xl flex-col justify-between border-l border-[#E5E7EB] bg-[#FCFBF8] p-6 shadow-2xl transition-transform duration-300 ease-out sm:p-10"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-[#FF6A00]" aria-hidden="true" />
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#111111]">
              Directory Index
            </span>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-none border border-[#E5E7EB] bg-[#FFFFFF] text-[#111111] transition-colors hover:border-[#111111] hover:text-[#FF6A00]"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Menu Items List */}
        <nav aria-label="Expanded Site Directory" className="my-6 flex-1 overflow-y-auto pr-2">
          <ul className="divide-y divide-[#E5E7EB]">
            {MENU_ITEMS.map((item, index) => (
              <li
                key={item.href}
                className="transition-all duration-200"
                style={{
                  animationDelay: `${index * 30}ms`,
                }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-baseline justify-between py-3.5 transition-colors hover:pl-2"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-mono text-[#6B7280] group-hover:text-[#FF6A00]">
                      {item.index}
                    </span>
                    <div>
                      <span className="text-base font-semibold text-[#111111] transition-colors group-hover:text-[#FF6A00]">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-[#6B7280]">
                        {item.tagline}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#6B7280] opacity-0 transition-all group-hover:translate-x-1 group-hover:text-[#FF6A00] group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Contact & CTA */}
        <div className="border-t border-[#E5E7EB] pt-6">
          <div className="mb-5 flex flex-col gap-2 text-xs font-mono text-[#6B7280]">
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
            className="flex w-full items-center justify-center gap-2 border border-[#FF6A00] bg-[#FF6A00] px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#FFFFFF] transition-all hover:bg-[#111111] hover:border-[#111111]"
          >
            <span>Discuss a School Partnership</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
