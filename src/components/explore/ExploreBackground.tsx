"use client";

import React from "react";

interface ExploreBackgroundProps {
  inView: boolean;
  activeCardIndex: number | null;
}

export function ExploreBackground({ inView, activeCardIndex }: ExploreBackgroundProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Dotted Coordinate Blueprint Grid */}
      <svg className="absolute inset-0 h-full w-full opacity-35" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="explore-bg-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="24" cy="24" r="0.75" fill="#9CA3AF" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#explore-bg-grid)" />
      </svg>

      {/* 2. Technical Blueprint Vector Geometry (Sweeping Arc & Connector Paths) */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle Drifting Guide Lines */}
        <g className="explore-guide-drift opacity-50">
          <line x1="0" y1="120" x2="1600" y2="120" stroke="#E5E7EB" strokeWidth="0.75" strokeDasharray="4 6" />
          <line x1="0" y1="520" x2="1600" y2="520" stroke="#E5E7EB" strokeWidth="0.75" strokeDasharray="3 6" />
          <line x1="0" y1="820" x2="1600" y2="820" stroke="#E5E7EB" strokeWidth="0.75" />
          <line x1="420" y1="0" x2="420" y2="900" stroke="#F3F4F6" strokeWidth="0.75" />
          <line x1="1500" y1="0" x2="1500" y2="900" stroke="#E5E7EB" strokeWidth="0.75" />
        </g>

        {/* Large sweeping circular arc on left side (matching reference image) */}
        <path
          d="M 400 0 C 120 180, 0 420, 100 680 C 180 840, 360 900, 420 900"
          stroke={inView ? "#FF6A00" : "#E5E7EB"}
          strokeWidth="1.2"
          strokeOpacity={inView ? "0.55" : "0.25"}
          strokeDasharray="1400"
          strokeDashoffset={inView ? "0" : "1400"}
          className="transition-all duration-1000 ease-out"
        />

        {/* Outer concentric subtle arc */}
        <path
          d="M 440 0 C 180 200, 60 450, 160 700 C 240 850, 420 900, 480 900"
          stroke="#E5E7EB"
          strokeWidth="0.75"
          strokeDasharray="6 8"
          strokeOpacity="0.6"
        />

        {/* Square Anchor Node on Left Arc (x: 95, y: 590) */}
        <rect
          x="91"
          y="586"
          width="8"
          height="8"
          fill="#FF6A00"
          className="transition-transform duration-500"
        />

        {/* Horizontal Connector Path with square node running above cards (matching reference image) */}
        <g className="transition-all duration-500">
          {/* Main top circuit line */}
          <path
            d="M 100 700 H 360 C 380 700, 390 710, 400 720 V 780 H 420"
            stroke="#FF6A00"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <rect x="386" y="716" width="6" height="6" fill="#FF6A00" />

          {/* Top route line above Card 01 */}
          <path
            d="M 780 110 H 1080 V 100 H 1100"
            stroke="#FF6A00"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
          <rect x="1076" y="96" width="7" height="7" fill="#FF6A00" />

          {/* Right vertical connector line to index rail */}
          <line
            x1="1500"
            y1="60"
            x2="1500"
            y2="820"
            stroke="#E5E7EB"
            strokeWidth="0.75"
          />
          {/* Accent node on right rail */}
          <rect
            x="1496"
            y="265"
            width="8"
            height="8"
            fill="#FF6A00"
            className="transition-all duration-300"
          />
          <line
            x1="1470"
            y1="269"
            x2="1496"
            y2="269"
            stroke="#FF6A00"
            strokeWidth="1"
          />
        </g>
      </svg>

      {/* 3. Bottom-Right Blueprint Metadata (REAL CHALLENGES / REAL LEARNING) */}
      <div className="absolute bottom-8 right-6 hidden select-none text-right font-mono text-[10px] uppercase tracking-[0.25em] text-[#6B7280] sm:right-10 lg:block xl:right-14">
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
            transform: translateY(2.5px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .explore-guide-drift {
          animation: subtleDrift 8s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .explore-guide-drift {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
