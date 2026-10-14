"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import type { TechnologyDomain } from "@/content/domainsData";
import { TechnologyDomainCard } from "./TechnologyDomainCard";

export function TechnologyCarousel({
  domains,
  currentIndex,
  onIndexChange,
  onOpenModal,
}: {
  domains: TechnologyDomain[];
  currentIndex: number;
  onIndexChange: (idx: number) => void;
  onOpenModal: (domain: TechnologyDomain) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);

  // Card Width + Gap calculation
  const getCardStep = useCallback(() => {
    if (!containerRef.current) return 370;
    const width = window.innerWidth;
    if (width < 640) return 306; // 290px + 16px gap
    if (width < 1024) return 336; // 320px + 16px gap
    if (width < 1280) return 360; // 340px + 20px gap
    return 375; // 355px + 20px gap
  }, []);

  // Update track translation based on currentIndex
  useEffect(() => {
    const step = getCardStep();
    setCurrentTranslate(-currentIndex * step);
  }, [currentIndex, getCardStep]);

  // Autoplay functionality (6s interval, paused on hover or document hidden)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      if (!isHoveredRef.current && !document.hidden) {
        onIndexChange((currentIndex + 1) % domains.length);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, domains.length, onIndexChange]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      onIndexChange(Math.min(currentIndex + 1, domains.length - 1));
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      onIndexChange(Math.max(currentIndex - 1, 0));
    }
  };

  // Touch Swipe Handlers
  const touchStartXRef = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && currentIndex < domains.length - 1) {
        onIndexChange(currentIndex + 1);
      } else if (diff < 0 && currentIndex > 0) {
        onIndexChange(currentIndex - 1);
      }
    }
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = startX - e.clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < domains.length - 1) {
        onIndexChange(currentIndex + 1);
      } else if (diff < 0 && currentIndex > 0) {
        onIndexChange(currentIndex - 1);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        setIsDragging(false);
      }}
      className="relative w-full outline-none focus:ring-1 focus:ring-[#FF6A00]/50 rounded-2xl"
      aria-label="Technology Domains Carousel"
      aria-roledescription="carousel"
    >
      {/* Top Circuit Bus Trace (Reference Image matching) */}
      <div className="relative mb-6 h-8 w-full select-none overflow-hidden">
        {/* Subtle Horizontal Circuit Trace Line */}
        <div className="absolute top-4 left-0 right-0 h-[1.5px] bg-[#E5E7EB]" aria-hidden="true">
          {/* Active orange glowing segment */}
          <div
            className="h-full bg-[#FF6A00] transition-all duration-500 ease-out"
            style={{
              width: `${((currentIndex + 1) / domains.length) * 100}%`,
            }}
          />
        </div>

        {/* Circuit Process Nodes: IDEAS -> EXPERIMENT -> BUILD -> TEST -> IMPACT */}
        <div className="relative z-10 flex items-center justify-between px-2 font-mono text-[0.62rem] text-[#9CA3AF]">
          <div className="hidden sm:flex items-center gap-3">
            <span className="flex items-center gap-1 font-semibold text-[#111111]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A00]" />
              IDEAS
            </span>
            <span className="text-[#D1D5DB]">──&gt;</span>
            <span className="flex items-center gap-1 font-semibold text-[#111111]">
              <span className="h-1.5 w-1.5 rounded-xs bg-[#FF6A00]" />
              EXPERIMENT
            </span>
            <span className="text-[#D1D5DB]">──&gt;</span>
            <span className="flex items-center gap-1 font-semibold text-[#111111]">
              <span className="h-1.5 w-1.5 rounded-xs bg-[#FF6A00]" />
              BUILD
            </span>
            <span className="text-[#D1D5DB]">──&gt;</span>
            <span className="flex items-center gap-1 font-semibold text-[#111111]">
              <span className="h-1.5 w-1.5 rounded-xs bg-[#FF6A00]" />
              TEST
            </span>
            <span className="text-[#D1D5DB]">──&gt;</span>
            <span className="flex items-center gap-1 font-semibold text-[#FF6A00]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A00]" />
              IMPACT
            </span>
          </div>

          {/* Far-Right Micro Annotation */}
          <div className="hidden xl:flex flex-col text-right leading-tight tracking-widest text-[0.55rem] font-bold text-[#9CA3AF]">
            <span>REAL CHALLENGES</span>
            <span>REAL LEARNING</span>
          </div>
        </div>
      </div>

      {/* Horizontally Slidable Carousel Track */}
      <div className="overflow-visible">
        <div
          ref={trackRef}
          className="flex items-center gap-4 sm:gap-5 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform pb-3 pt-2"
          style={{
            transform: `translateX(${currentTranslate}px)`,
          }}
        >
          {domains.map((domain, index) => {
            const isActive = index === currentIndex;
            return (
              <TechnologyDomainCard
                key={domain.id}
                domain={domain}
                isActive={isActive}
                onSelect={() => onIndexChange(index)}
                onOpenModal={() => onOpenModal(domain)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
