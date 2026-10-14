"use client";

import React, { useEffect, useState } from "react";

interface OrbitBackgroundProps {
  activeIndex: number;
  inView: boolean;
}

export function OrbitBackground({ activeIndex, inView }: OrbitBackgroundProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Row Y positions corresponding to the 5 timeline rows (proportional in 1600x900 viewport space)
  // Rows roughly at y = 175, 320, 465, 610, 755
  const rowYPositions = [180, 325, 470, 615, 760];

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Dotted Coordinate Blueprint Grid */}
      <svg className="absolute inset-0 h-full w-full opacity-35" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="orbit-bg-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="24" cy="24" r="0.75" fill="#9CA3AF" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#orbit-bg-grid)" />
      </svg>

      {/* 2. Technical Blueprint Vector Geometry (Arcs, Guide Lines, Nodes) */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle Drifting Guide Lines (Animation A) */}
        <g className="orbit-guide-drift opacity-60">
          {/* Horizontal cross-section guide lines */}
          <line x1="0" y1="180" x2="1600" y2="180" stroke="#E5E7EB" strokeWidth="0.75" strokeDasharray="4 6" />
          <line x1="0" y1="470" x2="1600" y2="470" stroke="#E5E7EB" strokeWidth="0.75" />
          <line x1="0" y1="760" x2="1600" y2="760" stroke="#E5E7EB" strokeWidth="0.75" strokeDasharray="4 6" />

          {/* Vertical axis guide lines */}
          <line x1="720" y1="0" x2="720" y2="900" stroke="#F3F4F6" strokeWidth="0.75" />
          <line x1="880" y1="0" x2="880" y2="900" stroke="#E5E7EB" strokeWidth="0.75" strokeDasharray="2 6" />
        </g>

        {/* Major Sweeping Circular Arc (Animation B: Arc drawing) */}
        {/* Arc sweeps from top center (x:720, y:0), arches left around (x:670, y:230) and (x:690, y:600) down to bottom (x:825, y:845) */}
        <path
          d="M 720 0 C 650 180, 670 420, 690 615 C 705 750, 780 840, 825 845"
          stroke={inView ? "#FF6A00" : "#E5E7EB"}
          strokeWidth="1.2"
          strokeOpacity={inView ? "0.6" : "0.3"}
          strokeDasharray="1200"
          strokeDashoffset={inView ? "0" : "1200"}
          className="transition-all duration-1000 ease-out"
        />

        {/* Outer concentric subtle arc */}
        <path
          d="M 780 0 C 720 200, 730 430, 745 615 C 760 760, 820 830, 860 850"
          stroke="#E5E7EB"
          strokeWidth="0.75"
          strokeDasharray="6 8"
          strokeOpacity="0.7"
        />

        {/* Arc Anchor Nodes with square geometry matching the reference */}
        {/* Node 1: Top Apex */}
        <rect
          x="716"
          y="35"
          width="8"
          height="8"
          fill="#FF6A00"
          className="transition-transform duration-500"
          style={{ transformOrigin: "720px 39px" }}
        />
        {/* Node 2: Mid-left Arc Node */}
        <rect
          x="670"
          y="235"
          width="7"
          height="7"
          fill="#FF6A00"
          className="transition-transform duration-500"
          style={{ transformOrigin: "673px 238px" }}
        />
        {/* Node 3: Lower Arc Node */}
        <rect
          x="690"
          y="605"
          width="8"
          height="8"
          fill="#FF6A00"
          className="transition-transform duration-500"
          style={{ transformOrigin: "694px 609px" }}
        />
        {/* Node 4: Bottom Center Focal Node with crosshair */}
        <g transform="translate(825, 845)">
          <rect x="-4" y="-4" width="8" height="8" fill="#FF6A00" />
          <line x1="-12" y1="0" x2="12" y2="0" stroke="#FF6A00" strokeWidth="0.75" />
          <line x1="0" y1="-12" x2="0" y2="12" stroke="#FF6A00" strokeWidth="0.75" />
          <circle cx="0" cy="0" r="16" stroke="#FF6A00" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.4" />
        </g>

        {/* 3. Dynamic Synchronized Connectors to Timeline Rows (Animation D) */}
        {rowYPositions.map((yPos, idx) => {
          const isActive = activeIndex === idx;
          // Connecting line from arc region (x: 700-750) through timeline numbers (x: 800) to row item (x: 880) and far right (x: 1450)
          return (
            <g key={idx} className="transition-all duration-300">
              {/* Connector from arc to timeline node */}
              <line
                x1="680"
                y1={yPos}
                x2="880"
                y2={yPos}
                stroke={isActive ? "#FF6A00" : "#E5E7EB"}
                strokeWidth={isActive ? "1.5" : "0.75"}
                strokeOpacity={isActive ? "1" : "0.4"}
              />

              {/* Horizontal line extending beyond the row to the right edge */}
              <line
                x1="1250"
                y1={yPos}
                x2="1480"
                y2={yPos}
                stroke={isActive ? "#FF6A00" : "#E5E7EB"}
                strokeWidth={isActive ? "1.2" : "0.75"}
                strokeOpacity={isActive ? "0.9" : "0.5"}
              />

              {/* Far right anchor dot */}
              <circle
                cx="1480"
                cy={yPos}
                r={isActive ? "3.5" : "2.5"}
                fill={isActive ? "#FF6A00" : "#D1D5DB"}
                className="transition-all duration-200"
              />

              {/* Connector node at x: 880 (timeline anchor) */}
              <rect
                x="876"
                y={yPos - 4}
                width="8"
                height="8"
                fill={isActive ? "#FF6A00" : "#FFFFFF"}
                stroke={isActive ? "#FF6A00" : "#D1D5DB"}
                strokeWidth="1.5"
                className="transition-all duration-200"
              />
            </g>
          );
        })}
      </svg>

      {/* 4. Top-Right Blueprint Metadata (IDEAS / PEOPLE / TECH / IMPACT) */}
      <div className="absolute right-6 top-8 hidden select-none text-right font-mono text-[10px] uppercase tracking-[0.25em] text-[#6B7280] sm:right-10 sm:top-10 lg:block xl:right-16">
        <div className="mb-2.5 flex items-center justify-end gap-1.5">
          <span className="h-0.5 w-4 bg-[#FF6A00]" />
          <span className="h-0.5 w-1.5 bg-[#FF6A00]" />
        </div>
        <div className="leading-relaxed">
          <p className="font-semibold text-[#111111]">IDEAS</p>
          <p>PEOPLE</p>
          <p>TECH</p>
          <p className="text-[#FF6A00]">IMPACT</p>
        </div>
      </div>

      {/* 5. Bottom-Right Blueprint Metadata (REAL CHALLENGES / REAL LEARNING) */}
      <div className="absolute bottom-10 right-6 hidden select-none text-right font-mono text-[10px] uppercase tracking-[0.25em] text-[#6B7280] sm:right-10 lg:block xl:right-16">
        <div className="mb-2 flex items-center justify-end">
          <span className="text-[#FF6A00] font-sans font-light text-xs">+</span>
        </div>
        <div className="leading-relaxed">
          <p className="font-semibold text-[#111111]">REAL</p>
          <p>CHALLENGES</p>
          <p className="font-semibold text-[#FF6A00]">REAL</p>
          <p>LEARNING</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes subtleDrift {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(3px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .orbit-guide-drift {
          animation: subtleDrift 8s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .orbit-guide-drift {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
