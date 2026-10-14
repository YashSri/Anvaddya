"use client";

import React from "react";
import { ChevronDown, CheckCircle2, BookOpen, Award } from "lucide-react";
import { FRAMEWORK_ITEMS, type FrameworkItem } from "@/content/whatIsOrbitData";
import { FrameworkIcon } from "./OrbitIcons";

interface OrbitFrameworkTimelineProps {
  activeIndex: number;
  onSelectIndex: (index: number) => void;
  onHoverIndex: (index: number | null) => void;
}

export function OrbitFrameworkTimeline({
  activeIndex,
  onSelectIndex,
  onHoverIndex,
}: OrbitFrameworkTimelineProps) {
  return (
    <div className="relative flex flex-col gap-4 sm:gap-5 w-full">
      {/* Central Thin Vertical Axis Line connecting all nodes */}
      <div className="absolute left-[2.85rem] sm:left-[3.35rem] top-8 bottom-8 w-px bg-[#E5E7EB] z-0 hidden sm:block" />

      {FRAMEWORK_ITEMS.map((item, idx) => {
        const isActive = activeIndex === idx;
        const panelId = `framework-panel-${item.id}`;
        const headerId = `framework-header-${item.id}`;

        return (
          <div
            key={item.id}
            className="group relative z-10 transition-all duration-200"
            onMouseEnter={() => onHoverIndex(idx)}
            onMouseLeave={() => onHoverIndex(null)}
          >
            {/* Interactive Timeline Row Button Header */}
            <button
              id={headerId}
              type="button"
              onClick={() => onSelectIndex(isActive ? -1 : idx)}
              aria-expanded={isActive}
              aria-controls={panelId}
              className={`w-full text-left flex items-start gap-3.5 sm:gap-5 p-3.5 sm:p-4 rounded-2xl transition-all duration-200 border ${
                isActive
                  ? "bg-white border-[#FF6A00]/40 shadow-[0_2px_12px_rgba(255,106,0,0.06)]"
                  : "bg-white/60 hover:bg-white border-transparent hover:border-[#E5E7EB]"
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00] focus-visible:ring-offset-2`}
            >
              {/* Left Sequence: Number + Square Connector Node */}
              <div className="flex items-center gap-2.5 sm:gap-3.5 pt-2 shrink-0">
                {/* 2-Digit Sequence Number */}
                <span
                  className={`font-mono text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                    isActive ? "text-[#FF6A00]" : "text-[#6B7280] group-hover:text-[#111111]"
                  }`}
                >
                  {item.num}
                </span>

                {/* Connecting hairline to node */}
                <span
                  className={`hidden sm:inline-block h-px w-3 transition-colors duration-200 ${
                    isActive ? "bg-[#FF6A00]" : "bg-[#E5E7EB] group-hover:bg-[#FF6A00]/50"
                  }`}
                />

                {/* Square Node */}
                <div
                  className={`h-2.5 w-2.5 shrink-0 transition-all duration-200 ${
                    isActive
                      ? "bg-[#FF6A00] scale-110"
                      : "bg-white border border-[#D1D5DB] group-hover:border-[#FF6A00] group-hover:bg-[#FF6A00]/20"
                  }`}
                />
              </div>

              {/* Minimal Squircle Icon Box */}
              <div
                className={`relative flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border transition-all duration-200 ${
                  isActive
                    ? "border-[#FF6A00] bg-orange-50/30 text-[#FF6A00]"
                    : "border-[#E5E7EB] bg-white text-[#111111] group-hover:border-[#FF6A00]/50 group-hover:text-[#FF6A00]"
                }`}
              >
                <FrameworkIcon
                  name={item.icon}
                  className="h-6 w-6 sm:h-7 sm:w-7 transition-colors duration-200"
                />
              </div>

              {/* Title & Concise Description Column */}
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="flex items-center justify-between gap-3">
                  <h3
                    className={`font-sans text-base sm:text-lg font-semibold tracking-[-0.01em] transition-colors duration-200 ${
                      isActive ? "text-[#FF6A00]" : "text-[#111111] group-hover:text-[#FF6A00]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Expand / Collapse Chevron Arrow Indicator */}
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                      isActive
                        ? "border-[#FF6A00]/30 bg-orange-50 text-[#FF6A00] rotate-180"
                        : "border-[#E5E7EB] text-[#6B7280] group-hover:border-[#FF6A00]/40 group-hover:text-[#111111]"
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </div>

                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#6B7280]">
                  {item.description}
                </p>

                {/* Right Horizontal Extension Line to outer edge */}
                <div className="mt-3 hidden sm:flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span
                    className={`h-px flex-1 ${isActive ? "bg-[#FF6A00]/40" : "bg-[#E5E7EB]"}`}
                  />
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isActive ? "bg-[#FF6A00]" : "bg-[#D1D5DB]"
                    }`}
                  />
                </div>
              </div>
            </button>

            {/* Accordion Expansion Detail Panel */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={`grid transition-all duration-300 ease-out overflow-hidden ${
                isActive ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0 pl-16 sm:pl-28 pr-4 pb-3">
                <div className="rounded-xl border border-[#E5E7EB] bg-white p-4 sm:p-5 shadow-xs">
                  {/* Focus Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F3F4F6] pb-3">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#FF6A00]">
                      Focus: {item.expandedDetails.focusArea}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#6B7280]">
                      <BookOpen className="h-3.5 w-3.5 text-[#FF6A00]" />
                      Curriculum Aligned
                    </span>
                  </div>

                  {/* Key Implementation Points */}
                  <ul className="mt-3.5 space-y-2 text-xs sm:text-sm text-[#4B5563]">
                    {item.expandedDetails.keyPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FF6A00] mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Academic Integration & Evidence Footers */}
                  <div className="mt-4 pt-3 border-t border-[#F3F4F6] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="rounded-lg bg-[#FCFBF8] p-2.5 border border-[#E5E7EB]/60">
                      <span className="block font-medium text-[#111111]">Academic Integration</span>
                      <span className="mt-0.5 block text-[#6B7280] leading-normal">
                        {item.expandedDetails.academicLink}
                      </span>
                    </div>
                    <div className="rounded-lg bg-[#FCFBF8] p-2.5 border border-[#E5E7EB]/60">
                      <span className="block font-medium text-[#111111] flex items-center gap-1">
                        <Award className="h-3.5 w-3.5 text-[#FF6A00]" />
                        Evidence Artifact
                      </span>
                      <span className="mt-0.5 block text-[#6B7280] leading-normal">
                        {item.expandedDetails.evidenceType}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
