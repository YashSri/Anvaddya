"use client";

import React from "react";

interface CTABackgroundGeometryProps {
  inView?: boolean;
}

export function CTABackgroundGeometry({ inView = true }: CTABackgroundGeometryProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
    >
      {/* 2D SVG Blueprint & Orbital Line Art */}
      <svg
        viewBox="0 0 1440 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="cta-inner-shade" cx="65%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#4A1303" stopOpacity="0.85" />
            <stop offset="65%" stopColor="#5E1A04" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8D2D09" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Curved dark zone shape matching reference image */}
        <path
          d="M 680 0 C 580 180, 560 480, 740 680 L 1440 680 L 1440 0 Z"
          fill="url(#cta-inner-shade)"
        />

        {/* Main large circular arc across the center-left dividing line */}
        <path
          d="M 680 0 C 580 180, 560 480, 740 680"
          stroke="#FF6A00"
          strokeWidth="1.2"
          strokeOpacity="0.75"
          className="transition-all duration-1000 ease-out"
          style={{
            strokeDasharray: 900,
            strokeDashoffset: inView ? 0 : 900,
            transition: "stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />

        {/* Secondary subtle orbital trajectory */}
        <path
          d="M 600 -40 C 720 180, 760 440, 640 720"
          stroke="#FFFFFF"
          strokeWidth="0.8"
          strokeOpacity="0.25"
          strokeDasharray="4 6"
        />

        {/* Right side fine orbital sweep entering the architectural photo */}
        <path
          d="M 850 420 C 1040 380, 1260 430, 1440 360"
          stroke="#FFA066"
          strokeWidth="1.2"
          strokeOpacity="0.65"
          style={{
            strokeDasharray: 600,
            strokeDashoffset: inView ? 0 : 600,
            transition: "stroke-dashoffset 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
          }}
        />

        {/* Square Anchor Node on primary arc */}
        <g
          transform="translate(620, 248)"
          className="transition-transform duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translate(620px, 248px) scale(1)" : "translate(620px, 258px) scale(0.8)",
            transition: "opacity 0.6s ease-out 0.5s, transform 0.6s ease-out 0.5s",
          }}
        >
          <rect
            x="-6"
            y="-6"
            width="12"
            height="12"
            rx="2.5"
            fill="#FF6A00"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
        </g>

        {/* Circular Accent Node on the primary curve */}
        <circle
          cx="710"
          cy="420"
          r="4"
          fill="#FF6A00"
          className="transition-opacity duration-500 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.6s ease-out 0.7s",
          }}
        />

        {/* Circular Accent Node on the right sweep */}
        <circle
          cx="1060"
          cy="470"
          r="4"
          fill="#FF6A00"
          stroke="#FFFFFF"
          strokeWidth="1"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.6s ease-out 0.8s",
          }}
        />

        {/* Small crosshair alignment marks */}
        <g opacity="0.4" stroke="#FFFFFF" strokeWidth="0.8">
          <line x1="680" y1="80" x2="696" y2="80" />
          <line x1="688" y1="72" x2="688" y2="88" />
        </g>
      </svg>

      {/* Editorial Vertical Tag beside the central arc */}
      <div
        className="absolute left-[47%] top-[22%] hidden 2xl:flex flex-col text-[0.62rem] tracking-[0.24em] font-mono uppercase text-white/60 leading-relaxed z-10"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.7s ease-out 0.6s, transform 0.7s ease-out 0.6s",
        }}
      >
        <span>IDEAS</span>
        <span>PEOPLE</span>
        <span>TECH</span>
        <span>IMPACT</span>
      </div>
    </div>
  );
}
