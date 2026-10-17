"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ExploreOrbitIntroProps {
  inView: boolean;
}

export function ExploreOrbitIntro({ inView }: ExploreOrbitIntroProps) {
  return (
    <div className="flex flex-col justify-between h-full pt-1">
      {/* Upper Area: Eyebrow, 2-line Headline, Description, and CTA */}
      <div>
        {/* Eyebrow */}
        <div className="explore-intro-elem flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#FF6A00]" />
          <span
            id="explore-title"
            className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00]"
          >
            EXPLORE ORBIT
          </span>
          <div className="flex items-center gap-1">
            <span className="h-px w-12 sm:w-16 bg-[#FF6A00]/50" />
            <span className="font-mono text-[10px] text-[#FF6A00]/70">~·~</span>
          </div>
        </div>

        {/* Headline: "Find what matters to you." with orange italic serif accent */}
        <h2 className="explore-intro-elem mt-6 font-sans text-4xl font-bold tracking-[-0.035em] text-[#111111] sm:text-5xl lg:text-[3.5rem] xl:text-[4.15rem] leading-[1.06]">
          <span className="block overflow-hidden">
            <span className="block">Find what</span>
          </span>
          <span className="block overflow-hidden">
            <span className="block">
              <span className="font-serif font-normal italic text-[#FF6A00]">matters</span>{" "}
              to you.
            </span>
          </span>
        </h2>

        {/* Supporting Paragraph */}
        <p className="explore-intro-elem mt-6 max-w-md text-base sm:text-lg leading-relaxed text-[#6B7280]">
          Each part of the programme has its own page. Start wherever is most useful.
        </p>

        {/* Functional CTA: Browse all sections */}
        <div className="explore-intro-elem mt-8 sm:mt-10 flex items-center gap-4">
          <Link
            href="/programme"
            className="group inline-flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00] focus-visible:ring-offset-2 rounded-full"
            aria-label="Browse all programme sections"
          >
            {/* Solid orange circular arrow button */}
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF6A00] text-white shadow-sm transition-all duration-200 group-hover:bg-[#E05D00] group-hover:scale-105 active:scale-95">
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
            <span className="text-sm sm:text-base font-semibold text-[#111111] transition-colors duration-200 group-hover:text-[#FF6A00]">
              Browse all sections
            </span>
            {/* Extending horizontal orange connector */}
            <span className="hidden sm:inline-block h-0.5 w-16 bg-[#FF6A00]/40 transition-all duration-300 group-hover:w-28 group-hover:bg-[#FF6A00]" />
          </Link>
        </div>
      </div>

      {/* Bottom Area: Editorial Motif & Ecosystem Caption (matching reference image) */}
      <div className="explore-intro-elem mt-12 sm:mt-20 pt-8 border-t border-[#E5E7EB]">
        {/* Stacked micro-text: IDEAS / PEOPLE / TECH / IMPACT */}
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#6B7280] leading-relaxed">
          <p className="font-semibold text-[#111111]">IDEAS</p>
          <p>PEOPLE</p>
          <p>TECH</p>
          <p className="text-[#FF6A00]">IMPACT</p>
        </div>

        {/* Separator line and caption */}
        <div className="mt-4 pt-4 border-t border-[#E5E7EB]/60">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6B7280]">
            A COMPLETE LEARNING ECOSYSTEM
          </span>
        </div>
      </div>
    </div>
  );
}
