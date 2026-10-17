"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { footerColumns } from "@/content/site";
import { FooterBrand } from "./FooterBrand";
import { FooterLinkColumn } from "./FooterLinkColumn";
import { FooterContactDetails } from "./FooterContactDetails";
import { FooterLegalStrip } from "./FooterLegalStrip";

export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Coordinated entrance animation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !footerRef.current || !inView) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".footer-anim-brand",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.65 }
      )
        .fromTo(
          ".footer-anim-column",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 },
          "-=0.35"
        )
        .fromTo(
          ".footer-anim-contact",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.55 },
          "-=0.25"
        )
        .fromTo(
          ".footer-anim-legal",
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.2"
        );
    }, footerRef);

    return () => ctx.revert();
  }, [inView]);

  // Extract columns
  const programmeCol = footerColumns.find((c) => c.title.toLowerCase().includes("programme")) || footerColumns[0];
  const studentsCol = footerColumns.find((c) => c.title.toLowerCase().includes("students")) || footerColumns[1];
  const connectCol = footerColumns.find((c) => c.title.toLowerCase().includes("connect")) || footerColumns[2];

  return (
    <footer
      ref={footerRef}
      id="site-footer"
      aria-label="Anvaddya Orbit Site Footer"
      className="relative bg-[#FCFBF8] text-[#111111] overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1720px] px-4 sm:px-8 lg:px-12 pt-16 sm:pt-20 lg:pt-24">
        {/* Main 5-Section Editorial Grid with Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 pb-16 lg:pb-20">
          {/* Column 1: Brand (~32% on desktop) */}
          <div className="footer-anim-brand lg:col-span-4 xl:col-span-4 lg:border-r lg:border-[#E5E7EB] lg:pr-8 xl:pr-12">
            <FooterBrand />
          </div>

          {/* Navigation Columns 2, 3, 4 (~44% on desktop) */}
          <div className="lg:col-span-5 xl:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-6 xl:gap-8">
            <div className="footer-anim-column">
              <FooterLinkColumn
                title="PROGRAMME"
                links={programmeCol.links}
                hasOrangeMarker={true}
              />
            </div>
            <div className="footer-anim-column">
              <FooterLinkColumn
                title="STUDENTS & SCHOOLS"
                links={studentsCol.links}
                hasOrangeMarker={false}
              />
            </div>
            <div className="footer-anim-column">
              <FooterLinkColumn
                title="CONNECT"
                links={connectCol.links}
                hasOrangeMarker={true}
              />
            </div>
          </div>

          {/* Column 5: Contact & Socials (~24% on desktop, separated by vertical divider) */}
          <div className="footer-anim-contact lg:col-span-3 xl:col-span-3 lg:border-l lg:border-[#E5E7EB] lg:pl-8 xl:pl-12">
            <FooterContactDetails />
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div className="footer-anim-legal">
          <FooterLegalStrip />
        </div>
      </div>
    </footer>
  );
}
