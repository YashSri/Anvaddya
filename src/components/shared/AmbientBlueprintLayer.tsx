"use client";

import React, { useEffect, useRef } from "react";

/**
 * ANIM-BG-04 & ANIM-BG-03: Ambient Blueprint Layer
 * Thin 2D architectural dashed curves, floating anchor nodes, and crosshairs
 * providing subtle, living technical movement behind content.
 */
export function AmbientBlueprintLayer() {
  const layerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized offset from screen center (-1 to +1)
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mousePos.current = {
        x: (e.clientX - centerX) / centerX,
        y: (e.clientY - centerY) / centerY,
      };
    };

    const updateParallax = () => {
      // Subtle linear damping (lerp factor 0.05)
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.05;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.05;

      if (layerRef.current) {
        // Shift parallax layer by at most 12px
        const shiftX = currentPos.current.x * 12;
        const shiftY = currentPos.current.y * 12;
        layerRef.current.style.transform = `translate3d(${shiftX.toFixed(2)}px, ${shiftY.toFixed(2)}px, 0)`;
      }

      animId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      <div ref={layerRef} className="relative h-full w-full will-change-transform opacity-60">
        {/* ANIM-BG-04: Drifting Architectural Curves & Circles */}
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 h-full w-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Top-Right Orbital Arc */}
          <g className="animate-ambient-arc">
            <path
              d="M 1100 -50 C 1300 200, 1400 450, 1250 700"
              stroke="#FF6A00"
              strokeWidth="0.8"
              strokeDasharray="4 8"
              strokeOpacity="0.25"
            />
          </g>

          {/* Center-Left Orbital Circle */}
          <g className="animate-ambient-circle">
            <circle
              cx="120"
              cy="480"
              r="260"
              stroke="#E5E7EB"
              strokeWidth="0.8"
              strokeDasharray="6 10"
              strokeOpacity="0.5"
            />
            {/* Small node gliding on arc */}
            <circle cx="380" cy="480" r="3" fill="#FF6A00" opacity="0.6" className="animate-ambient-dot" />
          </g>

          {/* Bottom-Right Orbital Path */}
          <g className="animate-ambient-arc">
            <path
              d="M 900 850 C 1100 700, 1350 800, 1500 650"
              stroke="#E5E7EB"
              strokeWidth="0.8"
              strokeDasharray="5 7"
              strokeOpacity="0.45"
            />
          </g>

          {/* Precise 2D Crosshair Marks */}
          <g opacity="0.3" stroke="#D1D5DB" strokeWidth="0.8">
            <line x1="240" y1="200" x2="256" y2="200" />
            <line x1="248" y1="192" x2="248" y2="208" />

            <line x1="1200" y1="360" x2="1216" y2="360" />
            <line x1="1208" y1="352" x2="1208" y2="368" />
          </g>
        </svg>

        {/* ANIM-BG-03: Floating Anchor Builder Nodes */}
        <div className="absolute top-[18%] left-[12%] animate-drift-slow">
          <div className="h-2 w-2 rounded-full bg-[#FF6A00]/40 animate-pulse-glow" />
          <div className="absolute -inset-1 rounded-full border border-[#FF6A00]/25 animate-pulse-glow" />
        </div>

        <div className="absolute top-[55%] right-[14%] animate-drift-reverse">
          <div className="h-2 w-2 rounded-full bg-[#111111]/30 animate-pulse-glow" />
          <div className="absolute -inset-1 rounded-full border border-[#D1D5DB]/60 animate-pulse-glow" />
        </div>

        <div className="absolute bottom-[20%] left-[22%] animate-drift-slow">
          <div className="h-1.5 w-1.5 rounded-xs bg-[#FF6A00]/35 animate-pulse-glow" />
        </div>
      </div>
    </div>
  );
}
