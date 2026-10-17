"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ExploreCardItem } from "@/content/exploreData";
import { ExploreCardIcon } from "./ExploreIcons";

interface SectionCardProps {
  card: ExploreCardItem;
  index: number;
  isLarge?: boolean;
}

export function SectionCard({ card, index, isLarge = false }: SectionCardProps) {
  const isFeatured = card.accentBorder || index === 0;

  return (
    <Link
      href={card.href}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white transition-all duration-300 ease-out border ${
        isFeatured
          ? "border-[#FF6A00] shadow-[0_2px_16px_rgba(255,106,0,0.08)]"
          : "border-[#E5E7EB] hover:border-[#FF6A00] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
      } hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00] focus-visible:ring-offset-2`}
      aria-label={`${card.num} — ${card.title}: ${card.description}`}
    >
      {/* Featured Orange Top Node Indicator on Card 01 (matching reference image) */}
      {isFeatured && (
        <span
          className="absolute -top-1.5 left-8 z-30 h-3 w-3 rounded-xs bg-[#FF6A00]"
          aria-hidden="true"
        />
      )}

      {/* ANIM-SVG-01: Traveling SVG Perimeter Border Beam */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible z-20"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="15"
          ry="15"
          fill="none"
          stroke="#FF6A00"
          strokeWidth="1.6"
          pathLength="100"
          strokeDasharray="12 88"
          className={`transition-opacity duration-300 animate-border-beam ${
            isFeatured ? "opacity-100" : "opacity-0 group-hover:opacity-75"
          }`}
        />
      </svg>

      {/* Main Card Content Container: Left Info Area + Right Angled Photo */}
      <div className="relative flex flex-1 items-stretch">
        {/* Left Info Column */}
        <div className={`relative z-10 flex flex-col justify-between p-5 sm:p-6 ${isLarge ? "w-[56%] sm:w-[58%]" : "w-[60%] sm:w-[62%]"}`}>
          <div>
            {/* Index Number + Orange Line */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[#111111]">
                {card.num}
              </span>
              <span className="h-px w-6 bg-[#FF6A00] transition-all duration-300 group-hover:w-10" />
            </div>

            {/* Outline Icon */}
            <div className="mt-4 sm:mt-5 text-[#FF6A00] transition-transform duration-300 group-hover:scale-105">
              <ExploreCardIcon name={card.icon} size={28} className="h-7 w-7" />
            </div>

            {/* Card Title */}
            <h3 className={`mt-3.5 sm:mt-4 font-sans font-bold tracking-tight text-[#111111] transition-colors duration-200 group-hover:text-[#FF6A00] ${
              isLarge ? "text-xl sm:text-2xl leading-snug" : "text-lg sm:text-xl leading-snug"
            }`}>
              {card.title}
            </h3>

            {/* Card Description */}
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#6B7280]">
              {card.description}
            </p>
          </div>

          {/* Action Arrow Button at Bottom Left */}
          <div className="mt-6 pt-2">
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 ${
                isFeatured
                  ? "bg-[#FF6A00] text-white shadow-xs group-hover:bg-[#E05D00] group-hover:scale-105"
                  : "border border-[#E5E7EB] bg-white text-[#111111] group-hover:border-[#FF6A00] group-hover:bg-[#FF6A00] group-hover:text-white"
              }`}
            >
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>

        {/* Right Diagonally Clipped Photo Column */}
        <div
          className={`absolute right-0 top-0 bottom-0 overflow-hidden ${
            isLarge ? "w-[44%] sm:w-[42%]" : "w-[40%] sm:w-[38%]"
          }`}
          style={{
            clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <div className="relative h-full w-full overflow-hidden bg-[#F3F4F6]">
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
