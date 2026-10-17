"use client";

import React from "react";
import Link from "next/link";

interface CTAButtonProps {
  href?: string;
  label?: string;
  metaText?: string;
}

export function CTAButton({
  href = "/contact",
  label = "Start a Conversation",
  metaText = "SCHOOLS | PARTNERSHIPS | IMPACT",
}: CTAButtonProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
      <Link
        href={href}
        className="group relative inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#111111] transition-all duration-200 hover:bg-[#FCFBF8] hover:shadow-md active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-label={`${label} — Partnership inquiries`}
      >
        <span className="tracking-tight">{label}</span>
        <span className="flex h-5 w-5 items-center justify-center text-[#FF6A00] transition-transform duration-200 ease-out group-hover:translate-x-1">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className="h-4 w-4 stroke-current stroke-[2.2]"
            aria-hidden="true"
          >
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>

      {/* Extending Technical Line & Editorial Tag */}
      <div className="hidden sm:flex items-center gap-4 flex-1 max-w-sm">
        <span className="h-px bg-white/30 flex-1 max-w-[120px]" aria-hidden="true" />
        <span className="text-[0.65rem] font-mono tracking-[0.22em] uppercase text-white/55 whitespace-nowrap">
          {metaText}
        </span>
      </div>
    </div>
  );
}
