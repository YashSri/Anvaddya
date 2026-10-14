"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { TECHNOLOGY_DOMAINS, type TechnologyDomain } from "@/content/domainsData";
import { TechnologyDomainsIntro } from "./TechnologyDomainsIntro";
import { TechnologyCarousel } from "./TechnologyCarousel";
import { DomainDetailModal } from "./DomainDetailModal";
import { ImpactStatistics } from "./ImpactStatistics";

export function TechnologyDomainsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDomain, setSelectedDomain] = useState<TechnologyDomain | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const canPrev = currentIndex > 0;
  const canNext = currentIndex < TECHNOLOGY_DOMAINS.length - 1;

  const handlePrev = () => {
    if (canPrev) setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (canNext) setCurrentIndex((prev) => prev + 1);
  };

  const [inView, setInView] = useState(false);

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

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current || !inView) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".domain-intro-anim",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      id="programme-glance"
      aria-label="Technology Domains and Programme Impact"
      className="relative overflow-hidden bg-[#FCFBF8] py-14 sm:py-20 lg:py-24 border-b border-[#E5E7EB]"
    >
      {/* Subtle blueprint coordinate background marks consistent with hero */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden opacity-30">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="domains-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="0.75" fill="#D1D5DB" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#domains-grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1720px] px-4 sm:px-8 lg:px-12">
        {/* ================================================================ */}
        {/* PART A: TECHNOLOGY DOMAINS (Intro Left + Carousel Right)         */}
        {/* ================================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-start">
          {/* Left Editorial Intro Column (~26% width) */}
          <div className="domain-intro-anim lg:col-span-3 xl:col-span-3">
            <TechnologyDomainsIntro
              currentIndex={currentIndex}
              totalSlides={TECHNOLOGY_DOMAINS.length}
              onPrev={handlePrev}
              onNext={handleNext}
              canPrev={canPrev}
              canNext={canNext}
            />
          </div>

          {/* Right Horizontally Arranged Carousel (~74% width) */}
          <div className="lg:col-span-9 xl:col-span-9 overflow-hidden">
            <TechnologyCarousel
              domains={TECHNOLOGY_DOMAINS}
              currentIndex={currentIndex}
              onIndexChange={setCurrentIndex}
              onOpenModal={setSelectedDomain}
            />
          </div>
        </div>

        {/* ================================================================ */}
        {/* PART B: IMPACT STATISTICS (Fine Divider + 5 Metrics + Scroll)    */}
        {/* ================================================================ */}
        <ImpactStatistics />
      </div>

      {/* Interactive Detail Modal for Selected Domain */}
      <DomainDetailModal
        domain={selectedDomain}
        onClose={() => setSelectedDomain(null)}
      />
    </section>
  );
}
