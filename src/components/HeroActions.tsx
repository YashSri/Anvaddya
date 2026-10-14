import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cta } from "@/content/site";

export function HeroActions({ className = "" }: { className?: string }) {
  return (
    <div className={`hero-actions flex flex-wrap items-center gap-3.5 sm:gap-4 ${className}`}>
      {/* Primary CTA: Orange Pill */}
      <Link
        href={cta.primary.href}
        className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#FF6A00] bg-[#FF6A00] px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#E65F00] hover:border-[#E65F00] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:ring-offset-2"
        style={{ backgroundColor: "#FF6A00", borderColor: "#FF6A00", color: "#FFFFFF", borderRadius: "9999px" }}
      >
        <span>Discuss a School Partnership</span>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>

      {/* Secondary CTA: White Pill */}
      <Link
        href={cta.programme.href}
        className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#D1D5DB] bg-white px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-[#111111] shadow-sm transition-all duration-150 hover:border-[#111111] hover:bg-[#F9FAFB] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#111111] focus:ring-offset-2"
        style={{ backgroundColor: "#FFFFFF", borderColor: "#D1D5DB", color: "#111111", borderRadius: "9999px" }}
      >
        <span>Explore the Programme</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

