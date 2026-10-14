"use client";

import Link from "next/link";
import { useState } from "react";
import { CIRCUIT_DOMAINS, type CircuitDomain } from "@/content/circuitData";
import { Cpu, Bot, Wifi, Brain, FlaskConical } from "lucide-react";

const DOMAIN_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  stem: FlaskConical,
  robotics: Bot,
  iot: Wifi,
  ai: Brain,
  research: Cpu,
};

export function DomainStrip({
  onSelectDomain,
  className = "",
}: {
  onSelectDomain?: (domain: CircuitDomain) => void;
  className?: string;
}) {
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);

  return (
    <div className={`domain-strip border-t border-[#E5E7EB] pt-4 ${className}`}>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-[0.68rem] font-mono font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
            Core Technology Tracks & Domains
          </span>
          <span className="text-[0.68rem] font-mono text-[#FF6A00]">
            {hoveredDomain
              ? CIRCUIT_DOMAINS.find((d) => d.id === hoveredDomain)?.tagline
              : "5 Integrated Areas"}
          </span>
        </div>

        {/* 5 Domains Grid */}
        <div className="grid grid-cols-5 gap-2 sm:gap-3">
          {CIRCUIT_DOMAINS.map((domain) => {
            const IconComp = DOMAIN_ICONS[domain.id] || Cpu;
            const isHovered = hoveredDomain === domain.id;

            return (
              <Link
                key={domain.id}
                href={domain.href}
                onClick={(e) => {
                  if (onSelectDomain) {
                    e.preventDefault();
                    onSelectDomain(domain);
                  }
                }}
                onMouseEnter={() => setHoveredDomain(domain.id)}
                onMouseLeave={() => setHoveredDomain(null)}
                className={`domain-strip-item group relative flex flex-col items-center justify-center border px-2 py-2.5 transition-all duration-150 ${
                  isHovered
                    ? "border-[#FF6A00] bg-[#FFFFFF] shadow-sm"
                    : "border-[#E5E7EB] bg-[#FCFBF8] hover:border-[#111111]"
                }`}
                title={domain.description}
              >
                {/* Thin orange underline revealed on hover */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-full bg-[#FF6A00] transition-transform duration-150 ${
                    isHovered ? "scale-x-100" : "scale-x-0"
                  }`}
                  aria-hidden="true"
                />

                <IconComp
                  className={`h-4 w-4 transition-colors duration-150 ${
                    isHovered ? "text-[#FF6A00]" : "text-[#111111]"
                  }`}
                />
                <span
                  className={`mt-1.5 text-[0.72rem] font-mono font-semibold uppercase tracking-wider transition-colors ${
                    isHovered ? "text-[#111111]" : "text-[#6B7280]"
                  }`}
                >
                  {domain.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
