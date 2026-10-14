"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { TechnologyDomain } from "@/content/domainsData";
import { DomainIcon } from "./DomainIcons";

export function DomainDetailModal({
  domain,
  onClose,
}: {
  domain: TechnologyDomain | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (domain) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [domain, onClose]);

  if (!domain) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="domain-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#111111]/60 backdrop-blur-xs transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-2xl transition-all">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-[#E5E7EB] px-6 py-4 bg-[#FCFBF8]">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="font-bold text-[#FF6A00]">{domain.num}</span>
            <span className="text-[#D1D5DB]">/</span>
            <span className="font-semibold uppercase tracking-wider text-[#111111]">{domain.category}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#6B7280] transition-colors hover:bg-[#E5E7EB] hover:text-[#111111] focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-12 sm:gap-8 items-start">
            {/* Image Column */}
            <div className="sm:col-span-5 relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-[#E5E7EB] bg-[#F3F4F6]">
              <Image
                src={domain.image}
                alt={domain.title}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover"
                priority
              />
              <div className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 border border-[#E5E7EB] shadow-sm">
                <DomainIcon name={domain.iconName} className="h-5 w-5 text-[#FF6A00]" />
              </div>
            </div>

            {/* Content Column */}
            <div className="sm:col-span-7 flex flex-col">
              <h2 id="domain-modal-title" className="text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl">
                {domain.title}
              </h2>
              <p className="mt-2 text-sm font-medium text-[#FF6A00]">
                {domain.desc}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#6B7280]">
                {domain.fullDesc}
              </p>

              {/* Stage Focus */}
              <div className="mt-5 rounded-lg border border-[#E5E7EB] bg-[#FCFBF8] p-3 text-xs">
                <span className="font-mono font-bold uppercase tracking-wider text-[#111111]">Stage Focus: </span>
                <span className="text-[#6B7280]">{domain.stageFocus}</span>
              </div>

              {/* Key Projects */}
              <div className="mt-5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111]">
                  Signature Student Projects
                </span>
                <ul className="mt-2.5 space-y-2">
                  {domain.keyProjects.map((proj) => (
                    <li key={proj} className="flex items-start gap-2 text-xs text-[#374151]">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#FF6A00] mt-0.5" />
                      <span>{proj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Competencies */}
              <div className="mt-5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111]">
                  Target Competencies
                </span>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {domain.competencies.map((comp) => (
                    <span
                      key={comp}
                      className="rounded-full border border-[#E5E7EB] bg-white px-2.5 py-1 text-[0.68rem] font-semibold text-[#111111]"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E5E7EB] bg-[#FCFBF8] px-6 py-4">
          <Link
            href="/curriculum"
            onClick={onClose}
            className="text-xs font-semibold uppercase tracking-wider text-[#111111] hover:text-[#FF6A00] transition-colors"
          >
            Explore Curriculum Journey →
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#FF6A00] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#E65F00] active:scale-95"
          >
            <span>Partner With Us</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
