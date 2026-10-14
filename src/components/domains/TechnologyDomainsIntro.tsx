"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function TechnologyDomainsIntro({
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
  canPrev,
  canNext,
}: {
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
}) {
  const currentNum = String(currentIndex + 1).padStart(2, "0");
  const totalNum = String(totalSlides).padStart(2, "0");
  const progressPercent = ((currentIndex + 1) / totalSlides) * 100;

  return (
    <div className="flex flex-col justify-between h-full py-1">
      {/* Top Editorial Narrative */}
      <div>
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-[#FF6A00]" aria-hidden="true" />
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
            TECHNOLOGY DOMAINS
          </span>
          <span className="h-px w-8 bg-[#FF6A00]/50" aria-hidden="true" />
        </div>

        {/* Headline with orange accent */}
        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.08] tracking-[-0.03em] text-[#111111]">
          Explore
          <br />
          Our <span className="text-[#FF6A00]">Domains.</span>
        </h2>

        {/* Supporting copy */}
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#6B7280] max-w-sm">
          From sky to soil, from health to climate — students work on real-world challenges across diverse technology domains.
        </p>
      </div>

      {/* Bottom Controls Cluster */}
      <div className="mt-8 sm:mt-12 flex flex-col gap-4">
        {/* Previous and Next Buttons */}
        <div className="flex items-center gap-3">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={onPrev}
            disabled={!canPrev}
            aria-label="Previous domain slide"
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-150 active:scale-95 ${
              canPrev
                ? "border-gray-300 text-[#111111] hover:border-[#111111] hover:bg-white"
                : "border-gray-200 text-gray-300 cursor-not-allowed opacity-50"
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          {/* Right Arrow Button (Solid Orange) */}
          <button
            type="button"
            onClick={onNext}
            disabled={!canNext}
            aria-label="Next domain slide"
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-150 shadow-sm active:scale-95 ${
              canNext
                ? "bg-[#FF6A00] text-white hover:bg-[#E65F00]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed opacity-60"
            }`}
          >
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* Slide Counter */}
          <div className="ml-2 font-mono text-xs font-semibold text-[#111111]">
            <span className="text-[#FF6A00]">{currentNum}</span>
            <span className="text-gray-400 mx-1">/</span>
            <span className="text-gray-500">{totalNum}</span>
          </div>

          {/* Thin Progress Indicator Line */}
          <div className="ml-1 h-[2px] w-16 bg-[#E5E7EB] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FF6A00] transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
