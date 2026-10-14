"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { OrbitBackground } from "./OrbitBackground";
import { WhatIsOrbitIntro } from "./WhatIsOrbitIntro";
import { OrbitFrameworkTimeline } from "./OrbitFrameworkTimeline";
import { HowItWorksModal } from "./HowItWorksModal";

export function WhatIsOrbitSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [inView, setInView] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement>(null);

  // Determine current active index for background geometry synchronization
  const effectiveIndex = hoverIndex !== null ? hoverIndex : activeIndex;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Coordinated entrance animation sequence using GSAP
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current || !inView) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".orbit-intro-elem",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }
      ).fromTo(
        ".orbit-timeline-col",
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.7 },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      id="what-is-orbit"
      aria-label="What is Orbit — Parallel Learning Layer for Schools"
      className="relative overflow-hidden bg-[#FCFBF8] py-16 sm:py-24 lg:py-28 border-b border-[#E5E7EB]"
    >
      {/* 2D Animated Blueprint Background (Arcs, Dotted Grid, Synchronized Connectors) */}
      <OrbitBackground activeIndex={effectiveIndex} inView={inView} />

      {/* Main Container matching Hero and Technology Carousel */}
      <div className="relative z-10 mx-auto w-full max-w-[1720px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-start">
          {/* LEFT COLUMN: Editorial Introduction (~42% width) */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <WhatIsOrbitIntro
              inView={inView}
              onOpenHowItWorks={() => setIsModalOpen(true)}
            />
          </div>

          {/* RIGHT COLUMN: The Orbit Learning Framework (~58% width) */}
          <div className="orbit-timeline-col lg:col-span-7 flex flex-col justify-center">
            <OrbitFrameworkTimeline
              activeIndex={activeIndex}
              onSelectIndex={setActiveIndex}
              onHoverIndex={setHoverIndex}
            />
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal for "See how it works" */}
      <HowItWorksModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
