"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";
import { IMPACT_STATS, type ImpactStat } from "@/content/domainsData";

export function ImpactStatistics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(IMPACT_STATS.map(() => 0));

  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const triggerTicker = () => {
      if (prefersReducedMotion) {
        setCounts(IMPACT_STATS.map((m) => m.num));
        return;
      }

      if (tweenRef.current) tweenRef.current.kill();

      const state: Record<string, number> = {};
      IMPACT_STATS.forEach((_, idx) => {
        state[`val${idx}`] = 0;
      });
      setCounts(IMPACT_STATS.map(() => 0));

      const targetProps: Record<string, number> = {};
      IMPACT_STATS.forEach((stat, idx) => {
        targetProps[`val${idx}`] = stat.num;
      });

      tweenRef.current = gsap.to(state, {
        ...targetProps,
        duration: 1.8,
        ease: "power2.out",
        onUpdate: () => {
          setCounts(IMPACT_STATS.map((_, idx) => Math.round(state[`val${idx}`] || 0)));
        },
        onComplete: () => {
          setCounts(IMPACT_STATS.map((m) => m.num));
        },
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          triggerTicker();
        } else {
          // Reset when scrolled past so re-entering triggers ticker again (ANIM-TXT-04)
          setCounts(IMPACT_STATS.map(() => 0));
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      observer.disconnect();
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, []);

  const handleScrollToNext = () => {
    const nextElem = document.getElementById("what-title");
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: 600, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="mt-14 sm:mt-20 border-t border-[#E5E7EB] pt-10 sm:pt-14"
      aria-label="Anvaddya Orbit Impact Statistics"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Editorial Heading + Vertical Text Motif (~30% width) */}
        <div className="lg:col-span-4 xl:col-span-4 flex items-center justify-between gap-6">
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#FF6A00]" aria-hidden="true" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
                OUR IMPACT
              </span>
            </div>

            {/* Headline */}
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-[#111111]">
              A Learning
              <br />
              System, Built
              <br />
              to <span className="text-[#FF6A00]">Scale.</span>
            </h3>
          </div>

          {/* Vertical Text Motif (IDEAS / PEOPLE / TECH / IMPACT) */}
          <div className="hidden sm:flex flex-col gap-1 text-[0.6rem] font-mono tracking-widest text-[#9CA3AF] border-l border-[#E5E7EB] pl-5 select-none">
            <span>IDEAS</span>
            <span>PEOPLE</span>
            <span>TECH</span>
            <span>IMPACT</span>
          </div>
        </div>

        {/* Right 5 Impact Metrics Row + Scroll to Explore (~70% width) */}
        <div className="lg:col-span-8 xl:col-span-8 flex flex-wrap sm:flex-nowrap items-center justify-between gap-6">
          {/* 5 Metrics Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-4 w-full">
            {IMPACT_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col ${
                  i < IMPACT_STATS.length - 1 ? "sm:border-r sm:border-[#E5E7EB] sm:pr-4" : ""
                }`}
              >
                {/* Large Orange Numeral */}
                <span className="font-sans text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#FF6A00] leading-none">
                  {counts[i]}
                </span>

                {/* Orange Dash Line Under Numeral */}
                <span className="my-2 h-[2px] w-6 bg-[#FF6A00]" aria-hidden="true" />

                {/* Metric Label */}
                <span className="text-xs font-medium leading-snug text-[#374151]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Far-Right Scroll to Explore Indicator Button */}
          <div className="hidden xl:flex items-center pl-6 border-l border-[#E5E7EB] shrink-0">
            <button
              type="button"
              onClick={handleScrollToNext}
              className="group flex items-center gap-3 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-[#111111] hover:text-[#FF6A00] transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FF6A00] text-[#FF6A00] transition-transform duration-200 group-hover:translate-y-0.5 shadow-xs">
                <ArrowDown className="h-4 w-4" />
              </span>
              <span className="flex flex-col text-left leading-tight">
                <span>SCROLL</span>
                <span className="text-[#9CA3AF]">TO EXPLORE</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
