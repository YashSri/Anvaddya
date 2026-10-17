"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ExploreBackground } from "./ExploreBackground";
import { ExploreOrbitIntro } from "./ExploreOrbitIntro";
import { SectionCardGrid } from "./SectionCardGrid";

export function ExploreOrbitSection() {
  const [inView, setInView] = useState<boolean>(false);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Coordinated GSAP entrance animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current || !inView) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Intro column text elements reveal
      tl.fromTo(
        ".explore-intro-elem",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }
      )
        // 2. Card pop and reveal with subtle scale and stagger
        .fromTo(
          ".explore-card-elem",
          { opacity: 0, y: 14, scale: 0.985 },
          { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.06 },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      id="explore-orbit"
      aria-label="Explore Orbit — All Programme Sections"
      className="relative overflow-hidden bg-[#FCFBF8] py-16 sm:py-24 lg:py-28 border-b border-[#E5E7EB]"
    >
      {/* 2D Animated Blueprint Background */}
      <ExploreBackground inView={inView} activeCardIndex={activeCardIndex} />

      {/* Main Container matching Hero and What Is Orbit */}
      <div className="relative z-10 mx-auto w-full max-w-[1720px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* LEFT COLUMN: Editorial Introduction (~28% on desktop) */}
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col h-full">
            <ExploreOrbitIntro inView={inView} />
          </div>

          {/* RIGHT COLUMN: Asymmetric Interactive Programme Cards (~72% on desktop) */}
          <div className="lg:col-span-8 xl:col-span-9 flex flex-col justify-center">
            <SectionCardGrid onHoverCard={setActiveCardIndex} />
          </div>
        </div>
      </div>
    </section>
  );
}
