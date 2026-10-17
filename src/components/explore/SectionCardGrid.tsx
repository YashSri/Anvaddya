"use client";

import React, { useState } from "react";
import { EXPLORE_CARDS } from "@/content/exploreData";
import { SectionCard } from "./SectionCard";

interface SectionCardGridProps {
  onHoverCard?: (index: number | null) => void;
}

export function SectionCardGrid({ onHoverCard }: SectionCardGridProps) {
  const [activeIndex, setActiveIndex] = useState<number>(2); // 03 is selected by default in reference image

  // Split cards into Row 1 (3 larger cards) and Row 2 (5 compact cards)
  const topCards = EXPLORE_CARDS.slice(0, 3);
  const bottomCards = EXPLORE_CARDS.slice(3);

  const handleCardHover = (index: number | null) => {
    if (index !== null) {
      setActiveIndex(index);
    }
    if (onHoverCard) {
      onHoverCard(index);
    }
  };

  return (
    <div className="relative flex items-stretch gap-4 lg:gap-6 w-full">
      {/* Asymmetric Cards Grid Area */}
      <div id="explore-directory" className="flex-1 flex flex-col gap-4 sm:gap-5">
        {/* ROW 1: 3 Larger Cards (01, 02, 03) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {topCards.map((card, idx) => (
            <div
              key={card.id}
              className="explore-card-elem"
              onMouseEnter={() => handleCardHover(idx)}
              onMouseLeave={() => handleCardHover(null)}
            >
              <SectionCard card={card} index={idx} isLarge={true} />
            </div>
          ))}
        </div>

        {/* ROW 2: 5 Compact Cards (04, 05, 06, 07, 08) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {bottomCards.map((card, idx) => {
            const globalIndex = idx + 3;
            return (
              <div
                key={card.id}
                className="explore-card-elem"
                onMouseEnter={() => handleCardHover(globalIndex)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <SectionCard card={card} index={globalIndex} isLarge={false} />
              </div>
            );
          })}
        </div>
      </div>

      {/* FAR-RIGHT VERTICAL INDEX RAIL (matching reference image) */}
      <div className="hidden 2xl:flex w-10 shrink-0 flex-col justify-center items-center py-4 border-l border-[#E5E7EB] pl-3 select-none">
        <div className="flex flex-col items-center gap-3.5 font-mono text-[11px]">
          {EXPLORE_CARDS.map((card, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <a
                key={card.id}
                href={card.href}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`transition-all duration-200 flex items-center gap-1.5 ${
                  isSelected
                    ? "font-bold text-[#FF6A00] scale-105"
                    : "text-[#9CA3AF] hover:text-[#111111]"
                }`}
                aria-label={`Jump to ${card.num}: ${card.title}`}
              >
                {isSelected && <span className="h-px w-2 bg-[#FF6A00]" />}
                <span>{card.num}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
