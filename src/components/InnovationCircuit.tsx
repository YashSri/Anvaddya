"use client";

import { useState } from "react";
import { CIRCUIT_MODULES, type CircuitModule } from "@/content/circuitData";
import { ModuleDetailPanel } from "./ModuleDetailPanel";
import { EcosystemModal } from "./EcosystemModal";
import {
  Hexagon,
  Cog,
  Cpu,
  Brain,
  FlaskConical,
  ArrowDown,
} from "lucide-react";

export function InnovationCircuit({ className = "" }: { className?: string }) {
  const [activeModule, setActiveModule] = useState<CircuitModule | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);

  const handleCardClick = (id: string) => {
    const mod = CIRCUIT_MODULES.find((m) => m.id === id);
    if (mod) setActiveModule(mod);
  };

  return (
    <div className={`relative w-full select-none ${className}`}>
      {/* Top-Right Micro Annotations matching Image 2 */}
      <div className="absolute right-0 top-0 z-10 hidden xl:flex flex-col items-end text-right font-mono text-[0.62rem] leading-tight text-[#9CA3AF]">
        <span className="font-bold uppercase tracking-wider text-[#111111]">
          A Brighter Generation
        </span>
        <span className="font-bold uppercase tracking-wider text-[#111111]">
          Builds Different.
        </span>
        <span className="my-1.5 h-[1.5px] w-6 bg-[#FF6A00]" />
        <div className="mt-1 flex flex-col gap-0.5 text-[0.55rem] tracking-widest text-[#9CA3AF]">
          <span>STUDENTS</span>
          <span>MENTORS</span>
          <span>SCHOOLS</span>
          <span>REAL-WORLD</span>
        </div>
      </div>

      {/* Master SVG Circuit Diagram (Direct representation of Image 2) */}
      <svg
        viewBox="0 0 880 500"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="card-shadow" x="-10%" y="-10%" width="125%" height="130%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#000000" floodOpacity="0.04" />
          </filter>
        </defs>

        {/* Subtle Background Grid & Measurement Marks */}
        <g stroke="#E5E7EB" strokeWidth="0.75" strokeDasharray="3 6" opacity="0.7">
          <line x1="40" y1="70" x2="840" y2="70" />
          <line x1="40" y1="450" x2="840" y2="450" />
          <line x1="490" y1="20" x2="490" y2="480" />
          <line x1="700" y1="20" x2="700" y2="480" />
        </g>

        {/* Large Circular Arc Trace */}
        <path
          d="M 490 80 A 180 180 0 0 1 730 260 A 180 180 0 0 1 490 440"
          stroke="#FF6A00"
          strokeWidth="1.25"
          strokeDasharray="4 6"
          opacity="0.65"
        />

        {/* ============================================================== */}
        {/* CIRCUIT BUS LINES & ORANGE NODES                               */}
        {/* ============================================================== */}

        {/* Trace to Card 01 (Curiosity) */}
        <path
          d="M 280 137 H 410 V 170 H 490"
          stroke={hoveredCard === "curiosity" ? "#FF6A00" : "#D1D5DB"}
          strokeWidth={hoveredCard === "curiosity" ? "2" : "1.25"}
          className="transition-colors duration-200"
        />
        <rect x="407" y="134" width="6" height="6" fill="#FF6A00" />
        <rect x="487" y="167" width="6" height="6" fill="#FF6A00" />

        {/* Trace to Card 02 (Prototype) */}
        <path
          d="M 270 252 H 370 V 225 H 425"
          stroke={hoveredCard === "prototype" ? "#FF6A00" : "#D1D5DB"}
          strokeWidth={hoveredCard === "prototype" ? "2" : "1.25"}
          className="transition-colors duration-200"
        />
        <rect x="367" y="249" width="6" height="6" fill="#FF6A00" />
        <text x="315" y="244" fill="#111111" fontSize="9" fontWeight="bold" fontFamily="monospace">
          EXPERIMENT
        </text>
        <rect x="303" y="238" width="5" height="5" fill="#FF6A00" />

        {/* Trace to Card 04 (Evidence) */}
        <path
          d="M 285 372 H 395 V 335 H 435"
          stroke={hoveredCard === "evidence" ? "#FF6A00" : "#D1D5DB"}
          strokeWidth={hoveredCard === "evidence" ? "2" : "1.25"}
          className="transition-colors duration-200"
        />
        <rect x="392" y="369" width="6" height="6" fill="#FF6A00" />
        <text x="350" y="388" fill="#111111" fontSize="9" fontWeight="bold" fontFamily="monospace">
          TEST
        </text>
        <rect x="338" y="382" width="5" height="5" fill="#FF6A00" />

        {/* Trace to Card 03 (Sensor Data) */}
        <path
          d="M 640 172 H 565 V 195"
          stroke={hoveredCard === "sensor-data" ? "#FF6A00" : "#D1D5DB"}
          strokeWidth={hoveredCard === "sensor-data" ? "2" : "1.25"}
          className="transition-colors duration-200"
        />
        <rect x="562" y="169" width="6" height="6" fill="#FF6A00" />

        {/* Trace to Card 05 (Capability) */}
        <path
          d="M 630 362 H 560 V 325"
          stroke={hoveredCard === "capability" ? "#FF6A00" : "#D1D5DB"}
          strokeWidth={hoveredCard === "capability" ? "2" : "1.25"}
          className="transition-colors duration-200"
        />
        <rect x="557" y="359" width="6" height="6" fill="#FF6A00" />

        {/* Right vertical BUILD bus */}
        <path d="M 605 130 V 330" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="605" y1="230" x2="655" y2="230" stroke="#FF6A00" strokeWidth="1.25" />
        <rect x="602" y="227" width="6" height="6" fill="#FF6A00" />
        <rect x="652" y="227" width="6" height="6" fill="#FF6A00" />
        <text x="670" y="233" fill="#111111" fontSize="9" fontWeight="bold" fontFamily="monospace">
          BUILD
        </text>

        {/* Central Vertical Axis */}
        <line x1="490" y1="65" x2="490" y2="195" stroke="#111111" strokeWidth="1.5" />
        <line x1="490" y1="310" x2="490" y2="430" stroke="#111111" strokeWidth="1.5" />
        
        {/* Top IDEAS Label & Node */}
        <text x="490" y="55" fill="#111111" fontSize="9.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
          IDEAS
        </text>
        <circle cx="490" cy="72" r="3.5" fill="#FF6A00" />

        {/* Bottom IMPACT Label & Node */}
        <circle cx="490" cy="405" r="3.5" fill="#FF6A00" />
        <rect x="487" y="425" width="6" height="6" fill="#FF6A00" />
        <text x="490" y="445" fill="#111111" fontSize="9.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
          IMPACT
        </text>

        {/* ============================================================== */}
        {/* CENTRAL 3-TIER ISOMETRIC FLOATING DIAMOND STACK                */}
        {/* ============================================================== */}
        <g
          className="cursor-pointer transition-transform hover:scale-[1.02]"
          onClick={() => setEcosystemOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="Orbit Ecosystem Architecture Overview"
        >
          {/* Tier 3: Bottom White Diamond Layer */}
          <polygon
            points="490,260 565,295 490,330 415,295"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="1.5"
          />

          {/* Tier 2: Middle White Diamond Layer */}
          <polygon
            points="490,230 565,265 490,300 415,265"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="1.5"
          />

          {/* Tier 1: Top Vibrant Orange Diamond Layer */}
          <polygon
            points="490,195 565,230 490,265 415,230"
            fill="#FF6A00"
            stroke="#E65F00"
            strokeWidth="1.5"
          />

          {/* Orbit Core Graphic on top orange diamond */}
          <ellipse
            cx="490"
            cy="230"
            rx="24"
            ry="9"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            fill="none"
            transform="rotate(-15 490 230)"
          />
          <circle cx="490" cy="230" r="4.5" fill="#FFFFFF" />
        </g>

        {/* ============================================================== */}
        {/* FIVE FLOATING PROCESS CARDS (Exact match to Image 2)           */}
        {/* ============================================================== */}

        {/* CARD 01: CURIOSITY (Top Left) */}
        <g
          className="cursor-pointer transition-all duration-200"
          onClick={() => handleCardClick("curiosity")}
          onMouseEnter={() => setHoveredCard("curiosity")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <rect
            x="110"
            y="105"
            width="170"
            height="64"
            rx="12"
            fill="#FFFFFF"
            stroke={hoveredCard === "curiosity" ? "#FF6A00" : "#E5E7EB"}
            strokeWidth="1.5"
            filter="url(#card-shadow)"
          />
          {/* Lightbulb Icon in Orange */}
          <g transform="translate(124, 122)">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
          </g>
          <text x="160" y="130" fill="#111111" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
            CURIOSITY
          </text>
          <text x="264" y="128" fill="#9CA3AF" fontSize="10.5" fontFamily="monospace">
            01
          </text>
          <text x="160" y="148" fill="#6B7280" fontSize="9.5" fontFamily="sans-serif">
            Ask Better Questions
          </text>
        </g>

        {/* CARD 02: PROTOTYPE (Middle Left) */}
        <g
          className="cursor-pointer transition-all duration-200"
          onClick={() => handleCardClick("prototype")}
          onMouseEnter={() => setHoveredCard("prototype")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <rect
            x="100"
            y="220"
            width="170"
            height="64"
            rx="12"
            fill="#FFFFFF"
            stroke={hoveredCard === "prototype" ? "#FF6A00" : "#E5E7EB"}
            strokeWidth="1.5"
            filter="url(#card-shadow)"
          />
          {/* Cube Icon in Orange */}
          <g transform="translate(114, 237)">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3z" />
              <path d="M12 12v9" />
              <path d="m20 7.5-8 4.5-8-4.5" />
            </svg>
          </g>
          <text x="150" y="245" fill="#111111" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
            PROTOTYPE
          </text>
          <text x="254" y="243" fill="#9CA3AF" fontSize="10.5" fontFamily="monospace">
            02
          </text>
          <text x="150" y="263" fill="#6B7280" fontSize="9.5" fontFamily="sans-serif">
            Turn Ideas into Models
          </text>
        </g>

        {/* CARD 04: EVIDENCE (Bottom Left) */}
        <g
          className="cursor-pointer transition-all duration-200"
          onClick={() => handleCardClick("evidence")}
          onMouseEnter={() => setHoveredCard("evidence")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <rect
            x="115"
            y="340"
            width="170"
            height="64"
            rx="12"
            fill="#FFFFFF"
            stroke={hoveredCard === "evidence" ? "#FF6A00" : "#E5E7EB"}
            strokeWidth="1.5"
            filter="url(#card-shadow)"
          />
          {/* Document Icon in Orange */}
          <g transform="translate(129, 357)">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
          </g>
          <text x="165" y="365" fill="#111111" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
            EVIDENCE
          </text>
          <text x="269" y="363" fill="#9CA3AF" fontSize="10.5" fontFamily="monospace">
            04
          </text>
          <text x="165" y="383" fill="#6B7280" fontSize="9.5" fontFamily="sans-serif">
            Show What You've Built
          </text>
        </g>

        {/* CARD 03: SENSOR DATA (Top Right) */}
        <g
          className="cursor-pointer transition-all duration-200"
          onClick={() => handleCardClick("sensor-data")}
          onMouseEnter={() => setHoveredCard("sensor-data")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <rect
            x="640"
            y="140"
            width="175"
            height="64"
            rx="12"
            fill="#FFFFFF"
            stroke={hoveredCard === "sensor-data" ? "#FF6A00" : "#E5E7EB"}
            strokeWidth="1.5"
            filter="url(#card-shadow)"
          />
          {/* Signal Icon in Orange */}
          <g transform="translate(654, 157)">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 10a14 14 0 0 1 20 0" />
              <path d="M5 13a10 10 0 0 1 14 0" />
              <circle cx="12" cy="18" r="1.5" fill="#FF6A00" />
            </svg>
          </g>
          <text x="690" y="165" fill="#111111" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
            SENSOR DATA
          </text>
          <text x="796" y="163" fill="#9CA3AF" fontSize="10.5" fontFamily="monospace">
            03
          </text>
          <text x="690" y="183" fill="#6B7280" fontSize="9.5" fontFamily="sans-serif">
            Explore the Real World
          </text>
        </g>

        {/* CARD 05: CAPABILITY (Bottom Right) */}
        <g
          className="cursor-pointer transition-all duration-200"
          onClick={() => handleCardClick("capability")}
          onMouseEnter={() => setHoveredCard("capability")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <rect
            x="630"
            y="330"
            width="175"
            height="64"
            rx="12"
            fill="#FFFFFF"
            stroke={hoveredCard === "capability" ? "#FF6A00" : "#E5E7EB"}
            strokeWidth="1.5"
            filter="url(#card-shadow)"
          />
          {/* Bars Icon in Orange */}
          <g transform="translate(644, 347)">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="4" />
              <line x1="12" y1="20" x2="12" y2="9" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          </g>
          <text x="680" y="355" fill="#111111" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
            CAPABILITY
          </text>
          <text x="786" y="353" fill="#9CA3AF" fontSize="10.5" fontFamily="monospace">
            05
          </text>
          <text x="680" y="373" fill="#6B7280" fontSize="9.5" fontFamily="sans-serif">
            Build Practical Skills
          </text>
        </g>
      </svg>

      {/* Interactive Detail Panel for Module Click */}
      <ModuleDetailPanel
        module={activeModule}
        onClose={() => setActiveModule(null)}
      />

      {/* Central Brand Ecosystem Modal */}
      <EcosystemModal
        isOpen={ecosystemOpen}
        onClose={() => setEcosystemOpen(false)}
      />
    </div>
  );
}

export function TechnologyDomainsStrip({ className = "" }: { className?: string }) {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("programme-glance");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: 600, behavior: "smooth" });
    }
  };

  return (
    <div className={`flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap ${className}`}>
      {/* Rounded Pill Container for Domains (Image 2) */}
      <div className="flex flex-wrap items-center gap-5 sm:gap-7 rounded-full border border-[#E5E7EB] bg-white px-5 sm:px-7 py-2.5 shadow-sm text-xs font-semibold text-[#111111]">
        <div className="flex items-center gap-2 hover:text-[#FF6A00] transition-colors cursor-pointer">
          <Hexagon className="h-4 w-4 text-[#111111]" />
          <span>STEM</span>
        </div>
        <div className="flex items-center gap-2 hover:text-[#FF6A00] transition-colors cursor-pointer">
          <Cog className="h-4 w-4 text-[#111111]" />
          <span>ROBOTICS</span>
        </div>
        <div className="flex items-center gap-2 hover:text-[#FF6A00] transition-colors cursor-pointer">
          <Cpu className="h-4 w-4 text-[#111111]" />
          <span>IoT</span>
        </div>
        <div className="flex items-center gap-2 hover:text-[#FF6A00] transition-colors cursor-pointer">
          <Brain className="h-4 w-4 text-[#111111]" />
          <span>AI</span>
        </div>
        <div className="flex items-center gap-2 hover:text-[#FF6A00] transition-colors cursor-pointer">
          <FlaskConical className="h-4 w-4 text-[#111111]" />
          <span>RESEARCH</span>
        </div>
      </div>

      {/* Right Scroll Indicator Button matching Image 2 */}
      <button
        type="button"
        onClick={handleScrollDown}
        className="flex items-center gap-2.5 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-[#111111] hover:text-[#FF6A00] transition-colors shrink-0"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#FF6A00] text-[#FF6A00] transition-transform hover:translate-y-0.5">
          <ArrowDown className="h-4 w-4" />
        </span>
        <span className="flex flex-col text-left leading-tight">
          <span>SCROLL</span>
          <span className="text-[#9CA3AF]">TO EXPLORE</span>
        </span>
      </button>
    </div>
  );
}
