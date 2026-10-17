"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { CTABackgroundGeometry } from "./CTABackgroundGeometry";
import { CTAButton } from "./CTAButton";

export interface SchoolPartnershipCtaProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  titleAccent?: string;
  body?: string;
  buttonLabel?: string;
  buttonHref?: string;
  metaText?: string;
}

export function SchoolPartnershipCta({
  eyebrow = "READY FOR WHAT'S NEXT?",
  titleLine1 = "Bring Applied",
  titleLine2 = "Learning Into",
  titleAccent = "Your School.",
  body = "Explore how Anvaddya Orbit can complement your school's learning environment and help students turn curiosity into demonstrable capability.",
  buttonLabel = "Start a Conversation",
  buttonHref = "/contact",
  metaText = "SCHOOLS | PARTNERSHIPS | IMPACT",
}: SchoolPartnershipCtaProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState<boolean>(false);

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

  // Coordinated GSAP reveal animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current || !inView) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Eyebrow reveal
      tl.fromTo(
        ".cta-eyebrow-item",
        { opacity: 0, x: -12 },
        { opacity: 1, x: 0, duration: 0.6 }
      )
        // 2. Headline line by line masked reveals
        .fromTo(
          ".cta-headline-line",
          { y: "105%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.75, stagger: 0.12 },
          "-=0.3"
        )
        // 3. Supporting copy fade
        .fromTo(
          ".cta-body-text",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.65 },
          "-=0.4"
        )
        // 4. CTA button and action
        .fromTo(
          ".cta-btn-wrapper",
          { opacity: 0, scale: 0.98, y: 8 },
          { opacity: 1, scale: 1, y: 0, duration: 0.55 },
          "-=0.35"
        )
        // 5. Right architectural visual reveal
        .fromTo(
          ".cta-image-wrapper",
          { opacity: 0, scale: 1.04 },
          { opacity: 1, scale: 1, duration: 1.1, ease: "power2.out" },
          "-=0.7"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      id="school-partnership-cta"
      aria-label="Bring Applied Learning Into Your School"
      className="relative overflow-hidden bg-[#8D2D09] text-white select-none border-b border-[#732407]"
    >
      {/* 2D Animated Blueprint Background Geometry */}
      <CTABackgroundGeometry inView={inView} />

      {/* Main Container aligned to Hero & Content width */}
      <div className="relative z-10 mx-auto w-full max-w-[1720px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[660px] items-stretch">
          {/* LEFT COLUMN: Bold Editorial Content (col-span-6 or 7 on desktop) */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center py-16 sm:py-20 lg:py-24 pr-0 lg:pr-8 xl:pr-12 z-20">
            {/* Eyebrow with fine line */}
            <div className="cta-eyebrow-item flex items-center gap-3 mb-6 sm:mb-8">
              <span className="h-px w-8 bg-white/40" aria-hidden="true" />
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-white/85">
                {eyebrow}
              </span>
            </div>

            {/* Headline with Masked Line-by-Line Reveal */}
            <h2 className="display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.06]">
              <span className="block overflow-hidden py-1">
                <span className="cta-headline-line block">{titleLine1}</span>
              </span>
              <span className="block overflow-hidden py-1">
                <span className="cta-headline-line block">{titleLine2}</span>
              </span>
              <span className="block overflow-hidden py-1">
                <span className="cta-headline-line block font-serif italic font-normal text-[#FFA066] tracking-normal">
                  {titleAccent}
                </span>
              </span>
            </h2>

            {/* Supporting Copy */}
            <p className="cta-body-text mt-6 sm:mt-8 max-w-xl text-base sm:text-lg text-white/85 leading-relaxed font-normal">
              {body}
            </p>

            {/* CTA Button and Extending Line */}
            <div className="cta-btn-wrapper mt-8 sm:mt-10">
              <CTAButton href={buttonHref} label={buttonLabel} metaText={metaText} />
            </div>
          </div>

          {/* RIGHT COLUMN: Asymmetric Architectural Visual with Slanted Cut */}
          <div className="lg:col-span-5 xl:col-span-6 relative flex items-center justify-end overflow-hidden pb-12 lg:pb-0">
            <div
              className="cta-image-wrapper relative w-full h-[360px] sm:h-[460px] lg:h-full min-h-[380px] lg:min-h-full overflow-hidden shadow-2xl"
              style={{
                clipPath: "polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              {/* Modern Minimalist School Architecture Visual */}
              <Image
                src="/cta/school-architecture.jpg"
                alt="Modern school campus architectural innovation pavilion"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter saturate-[0.95] contrast-[1.05]"
              />

              {/* Subtle Warm Tone Overlay for Harmonious Palette */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[#8D2D09]/15 mix-blend-multiply"
              />

              {/* Floating Technical Badge over Architectural Visual */}
              <div className="absolute right-6 sm:right-10 top-1/3 z-20 flex flex-col items-start gap-3 bg-[#111111]/30 backdrop-blur-none p-4 border border-white/20 text-white rounded-none">
                <span className="h-px w-6 bg-[#FFA066]" aria-hidden="true" />
                <div className="text-[0.62rem] font-mono tracking-[0.24em] uppercase text-white/90 leading-relaxed font-medium">
                  <div>A STRONGER</div>
                  <div>LEARNING</div>
                  <div>ECOSYSTEM</div>
                  <div className="text-[#FFA066]">TOGETHER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
