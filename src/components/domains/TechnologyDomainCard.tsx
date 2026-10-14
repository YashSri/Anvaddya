"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { TechnologyDomain } from "@/content/domainsData";
import { DomainIcon } from "./DomainIcons";

export function TechnologyDomainCard({
  domain,
  isActive,
  onSelect,
  onOpenModal,
}: {
  domain: TechnologyDomain;
  isActive: boolean;
  onSelect: () => void;
  onOpenModal: () => void;
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isActive) {
      onOpenModal();
    } else {
      onSelect();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick(e as unknown as React.MouseEvent);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`${domain.title} domain details`}
      aria-current={isActive ? "true" : undefined}
      className={`group relative flex h-[380px] sm:h-[410px] w-[290px] sm:w-[320px] lg:w-[340px] xl:w-[355px] shrink-0 overflow-hidden rounded-2xl bg-white select-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:ring-offset-2 ${
        isActive
          ? "border-2 border-[#FF6A00] shadow-lg -translate-y-1"
          : "border border-[#E5E7EB] shadow-xs hover:border-gray-400 hover:shadow-md hover:-translate-y-0.5"
      }`}
    >
      {/* Top connector node for active card (Tony Stark circuit alignment) */}
      {isActive && (
        <span
          className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 bg-[#FF6A00] rounded-xs z-20 shadow-xs"
          aria-hidden="true"
        />
      )}

      {/* LEFT HALF (~50% width): Editorial Metadata */}
      <div className="flex w-[50%] flex-col justify-between p-5 sm:p-6 bg-white z-10">
        {/* Top: Two-digit sequence number with dash */}
        <div className="flex items-center gap-1.5 font-mono text-xs">
          <span className={`font-bold ${isActive ? "text-[#FF6A00]" : "text-[#111111]"}`}>
            {domain.num}
          </span>
          <span className="text-[#D1D5DB]">—</span>
        </div>

        {/* Center: Outline Icon + Title + Descriptor */}
        <div className="flex flex-col">
          <div className="mb-3">
            <DomainIcon
              name={domain.iconName}
              className={`h-7 w-7 transition-colors duration-200 ${
                isActive ? "text-[#FF6A00]" : "text-[#FF6A00] group-hover:scale-110"
              }`}
            />
          </div>

          <h3 className="font-sans text-lg font-bold leading-tight text-[#111111] group-hover:text-[#FF6A00] transition-colors sm:text-xl">
            {domain.title}
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-[#6B7280] line-clamp-3">
            {domain.desc}
          </p>
        </div>

        {/* Bottom: Circular Arrow Action */}
        <div className="pt-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal();
            }}
            aria-label={`Open details for ${domain.title}`}
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 active:scale-95 ${
              isActive
                ? "bg-[#FF6A00] text-white shadow-sm"
                : "bg-white border border-[#E5E7EB] text-[#111111] group-hover:border-[#111111] group-hover:text-[#FF6A00]"
            }`}
          >
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* RIGHT HALF (~50% width): High-Quality Cover Image */}
      <div className="relative w-[50%] h-full overflow-hidden bg-[#F3F4F6]">
        <Image
          src={domain.image}
          alt={domain.title}
          fill
          sizes="(max-width: 640px) 160px, (max-width: 1024px) 180px, 200px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-106"
        />
        {/* Subtle gradient vignette to blend smoothly into card edge */}
        <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
