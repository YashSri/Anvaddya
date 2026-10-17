"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { HeroEyebrow } from "./HeroEyebrow";
import { AnimatedHeadline } from "./AnimatedHeadline";
import { HeroActions } from "./HeroActions";
import { InnovationCircuit } from "./InnovationCircuit";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-eyebrow-dot",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4 }
      )
        .fromTo(
          ".hero-eyebrow",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.2"
        )
        .fromTo(
          ".hero-eyebrow-line",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, ease: "power3.out", transformOrigin: "left center" },
          "-=0.3"
        )
        .fromTo(
          ".hero-headline-line",
          { y: "110%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.7, stagger: 0.1 },
          "-=0.2"
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.25"
        )
        .fromTo(
          ".hero-actions",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.2"
        )
        .fromTo(
          ".hero-circuit",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#FCFBF8] pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-10 lg:pb-12"
      aria-label="Anvaddya Orbit Introduction"
    >
      {/* Subtle blueprint coordinate background marks */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden opacity-40">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="0.75" fill="#D1D5DB" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1720px] px-4 sm:px-8 lg:px-12">
        <div className="flex items-stretch gap-6 lg:gap-10">
          {/* ========================================================== */}
          {/* FAR-LEFT VERTICAL RAIL (Exact match to Image 2)            */}
          {/* ========================================================== */}
          <div className="hidden lg:flex w-12 shrink-0 flex-col justify-between py-2 border-r border-[#E5E7EB]/70 pr-4 select-none">
            {/* Top Stage Numbers */}
            <div className="flex flex-col items-center gap-3 font-mono text-xs">
              <span className="font-bold text-[#FF6A00]">01</span>
              <span className="h-6 w-[2px] bg-[#FF6A00]" aria-hidden="true" />
              <span className="text-[#9CA3AF] transition-colors hover:text-[#111111] cursor-pointer">02</span>
              <span className="text-[#9CA3AF] transition-colors hover:text-[#111111] cursor-pointer">03</span>
              <span className="text-[#9CA3AF] transition-colors hover:text-[#111111] cursor-pointer">04</span>
            </div>

            {/* Bottom Stacked Micro Text */}
            <div className="flex flex-col gap-1 text-[0.62rem] font-mono tracking-widest text-[#9CA3AF]">
              <span>IDEAS</span>
              <span>PEOPLE</span>
              <span>TECH</span>
              <span>IMPACT</span>
            </div>
          </div>

          {/* ========================================================== */}
          {/* MAIN HERO CONTENT                                          */}
          {/* ========================================================== */}
          <div className="flex flex-1 flex-col justify-center">
            {/* TOP AREA: 2-Column (Left Narrative + Right Circuit) */}
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6 xl:gap-10">
              {/* LEFT COLUMN: Narrative & Call to Action (~44%) */}
              <div className="flex flex-col justify-center lg:col-span-5 xl:col-span-5">
                {/* 1. Eyebrow */}
                <HeroEyebrow />

                {/* 2. Main Headline */}
                <AnimatedHeadline className="mt-5 sm:mt-6" />

                {/* 3. Supporting Description */}
                <p className="hero-description mt-5 sm:mt-6 max-w-xl text-sm leading-relaxed text-[#6B7280] sm:text-base">
                  Anvaddya Orbit brings applied STEM, robotics, IoT, AI, research, and real-world problem-solving into the
                  school journey. Students move beyond memorising concepts to experimenting, building, testing ideas, and
                  documenting what they learn.
                </p>

                {/* 4. Action Buttons (Orange Pill + White Pill) */}
                <HeroActions className="mt-7 sm:mt-8" />
              </div>

              {/* RIGHT COLUMN: The Innovation Circuit Graphic (~56%) */}
              <div className="hero-circuit w-full lg:col-span-7 xl:col-span-7">
                <InnovationCircuit />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
