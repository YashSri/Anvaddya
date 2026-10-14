"use client";

import { ArrowDown } from "lucide-react";

export function ScrollIndicator({ className = "" }: { className?: string }) {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("programme-glance") || document.querySelector("section:nth-of-type(2)");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.7, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleScrollDown}
      className={`hero-scroll-indicator group inline-flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-[#6B7280] transition-colors hover:text-[#111111] focus:outline-none ${className}`}
      aria-label="Scroll down to explore programme"
    >
      <span>Explore Ecosystem</span>
      <span className="flex h-7 w-7 items-center justify-center border border-[#E5E7EB] bg-[#FFFFFF] transition-all duration-200 group-hover:border-[#111111] group-hover:translate-y-1">
        <ArrowDown className="h-3.5 w-3.5 text-[#FF6A00]" />
      </span>
    </button>
  );
}
