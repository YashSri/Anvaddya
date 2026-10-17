"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";

interface FooterBrandProps {
  partnershipHref?: string;
}

export function FooterBrand({ partnershipHref = "/contact" }: FooterBrandProps) {
  return (
    <div className="flex flex-col items-start pr-0 lg:pr-8 xl:pr-12">
      {/* Anvaddya Orbit Logo with Extending Horizontal Rule */}
      <div className="flex items-center gap-4">
        <Logo tone="dark" />
        <span className="hidden sm:inline-block h-px w-12 bg-[#FF6A00]" aria-hidden="true" />
      </div>

      {/* Brand Editorial Headline */}
      <div className="mt-8">
        <p className="font-sans text-2xl sm:text-[1.75rem] font-bold text-[#111111] leading-tight tracking-tight">
          From Curiosity to Capability.
        </p>
        <p className="font-serif italic text-2xl sm:text-[1.75rem] font-normal text-[#FF6A00] leading-tight mt-1">
          From Capability to Evidence.
        </p>
      </div>

      {/* Supporting Description */}
      <p className="mt-4 max-w-sm text-sm text-[#6B7280] leading-relaxed font-normal">
        A year-round applied STEM and innovation programme for schools, by Anvaddya.
      </p>

      {/* Partnership CTA Button */}
      <div className="mt-8">
        <Link
          href={partnershipHref}
          className="group inline-flex items-center gap-2.5 rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#E65F00] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6A00]"
          aria-label="Discuss a School Partnership — Contact page"
        >
          <span>Discuss a School Partnership</span>
          <span className="flex h-4 w-4 items-center justify-center transition-transform duration-200 ease-out group-hover:translate-x-1">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="h-3.5 w-3.5 stroke-current stroke-[2.2]"
              aria-hidden="true"
            >
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
