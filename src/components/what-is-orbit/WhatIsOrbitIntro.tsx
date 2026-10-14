"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ORBIT_METRICS } from "@/content/whatIsOrbitData";

interface WhatIsOrbitIntroProps {
  inView: boolean;
  onOpenHowItWorks?: () => void;
}

export function WhatIsOrbitIntro({ inView, onOpenHowItWorks }: WhatIsOrbitIntroProps) {
  const [counts, setCounts] = useState<number[]>(ORBIT_METRICS.map(() => 0));

  // Count-up animation for the 5 impact metrics when in view
  useEffect(() => {
    if (!inView) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setCounts(ORBIT_METRICS.map((m) => m.value));
      return;
    }

    const duration = 1200; // ms
    const startTime = performance.now();

    const frame = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // easeOutQuad
      const ease = 1 - (1 - progress) * (1 - progress);

      setCounts(ORBIT_METRICS.map((m) => Math.floor(ease * m.value)));

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        setCounts(ORBIT_METRICS.map((m) => m.value));
      }
    };

    const id = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(id);
  }, [inView]);

  return (
    <div className="flex flex-col justify-between h-full pt-2">
      {/* Upper Content: Eyebrow, 3-Line Headline, Description, and CTA */}
      <div>
        {/* Eyebrow */}
        <div className="orbit-intro-elem flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#FF6A00]" />
          <span
            id="what-title"
            className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00]"
          >
            WHAT IS ORBIT?
          </span>
          <div className="flex items-center gap-1">
            <span className="h-px w-12 sm:w-16 bg-[#FF6A00]/50" />
            <span className="font-mono text-[10px] text-[#FF6A00]/70">~·~</span>
          </div>
        </div>

        {/* Headline: 3 deliberate lines with orange italic serif accent */}
        <h2 className="orbit-intro-elem mt-6 font-sans text-4xl font-bold tracking-[-0.035em] text-[#111111] sm:text-5xl lg:text-[3.5rem] xl:text-[4.15rem] leading-[1.06]">
          <span className="block overflow-hidden">
            <span className="block">A parallel</span>
          </span>
          <span className="block overflow-hidden">
            <span className="block">learning layer</span>
          </span>
          <span className="block overflow-hidden">
            <span className="block font-serif font-normal italic text-[#FF6A00]">
              for schools.
            </span>
          </span>
        </h2>

        {/* Supporting Paragraph */}
        <p className="orbit-intro-elem mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#6B7280]">
          Orbit is designed to sit alongside the school curriculum. It combines structured
          curriculum, on-campus facilitation, hands-on projects, practitioner exposure, and
          portfolio-based evidence in one continuing programme.
        </p>

        {/* Functional CTA: See how it works */}
        <div className="orbit-intro-elem mt-8 sm:mt-10 flex items-center gap-4">
          <Link
            href="/how-we-learn"
            onClick={(e) => {
              if (onOpenHowItWorks) {
                e.preventDefault();
                onOpenHowItWorks();
              }
            }}
            className="group inline-flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00] focus-visible:ring-offset-2 rounded-full"
            aria-label="See how the Orbit learning framework works"
          >
            {/* Flat orange circular button */}
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF6A00] text-white shadow-sm transition-all duration-200 group-hover:bg-[#E05D00] group-hover:scale-105 active:scale-95">
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
            <span className="text-sm sm:text-base font-semibold text-[#111111] transition-colors duration-200 group-hover:text-[#FF6A00]">
              See how it works
            </span>
            {/* Extending horizontal orange connector */}
            <span className="hidden sm:inline-block h-0.5 w-16 bg-[#FF6A00]/40 transition-all duration-300 group-hover:w-28 group-hover:bg-[#FF6A00]" />
          </Link>
        </div>
      </div>

      {/* Bottom Compact Impact Metrics (5 in one row on desktop) */}
      <div className="orbit-intro-elem mt-12 sm:mt-16 pt-8 border-t border-[#E5E7EB]">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-2 items-start">
          {ORBIT_METRICS.map((metric, idx) => (
            <div key={metric.label} className="flex items-center">
              <div className="flex flex-col pr-2 sm:pr-4">
                <span className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#FF6A00]">
                  {counts[idx]}
                </span>
                <span className="text-xs text-[#6B7280] leading-tight mt-1">
                  <span className="block font-medium text-[#111111]">{metric.label}</span>
                  <span className="text-[#6B7280]">{metric.sublabel}</span>
                </span>
              </div>
              {/* Thin vertical divider between metrics (except last) */}
              {idx < ORBIT_METRICS.length - 1 && (
                <span className="hidden sm:block h-8 w-px bg-[#E5E7EB] shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
