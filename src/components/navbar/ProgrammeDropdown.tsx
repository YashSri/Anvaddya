"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

type DropdownItem = {
  title: string;
  href: string;
  description: string;
  stage: string;
};

const PROGRAMME_ITEMS: DropdownItem[] = [
  {
    title: "The Programme",
    href: "/programme",
    description: "A year-round, school-embedded STEM and innovation learning layer",
    stage: "Overview",
  },
  {
    title: "Curriculum Journey",
    href: "/curriculum",
    description: "The Classes 1–12 progression structured across seven developmental stages",
    stage: "Classes 1–12",
  },
  {
    title: "How We Learn",
    href: "/how-we-learn",
    description: "See-the-Science methodology and the FORGE engineering problem-solving loop",
    stage: "Pedagogy",
  },
  {
    title: "Stream Choice & Pathways",
    href: "/stream-choice",
    description: "Evidence-driven reflections for senior secondary and collegiate pathways",
    stage: "Senior School",
  },
];

export function ProgrammeDropdown({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isProgrammeActive = PROGRAMME_ITEMS.some(
    (item) => item.href === pathname || pathname.startsWith(`${item.href}/`)
  );

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls="programme-dropdown-menu"
        className={`group relative inline-flex items-center gap-1.5 py-2 text-[0.92rem] font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:ring-offset-2 rounded-sm ${
          isProgrammeActive
            ? "text-[#FF6A00] font-semibold"
            : "text-[#111111] hover:text-[#FF6A00]"
        }`}
      >
        <span>Programme</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ease-out ${
            isOpen ? "rotate-180 text-[#FF6A00]" : "text-[#6B7280] group-hover:text-[#FF6A00]"
          }`}
          aria-hidden="true"
        />

        {/* Animated thin orange underline */}
        <span
          className={`absolute bottom-0 left-0 h-[2px] w-full bg-[#FF6A00] transition-transform duration-200 ease-out origin-left ${
            isProgrammeActive
              ? "scale-x-100"
              : "scale-x-0 group-hover:scale-x-100"
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown Menu Container */}
      <div
        id="programme-dropdown-menu"
        role="region"
        aria-label="Programme sub-menu"
        className={`absolute left-0 top-full pt-2 z-50 transition-all duration-200 ease-out ${
          isOpen
            ? "visible opacity-100 translate-y-0 pointer-events-auto"
            : "invisible opacity-0 -translate-y-1.5 pointer-events-none"
        }`}
      >
        <div className="w-[330px] rounded-xl border border-[#E5E7EB] bg-[#FFFFFF] p-2 shadow-xl shadow-[#111111]/5">
          <ul className="space-y-1">
            {PROGRAMME_ITEMS.map((item) => {
              const isChildActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isChildActive ? "page" : undefined}
                    className={`group/item flex flex-col rounded-lg p-2.5 transition-colors ${
                      isChildActive
                        ? "bg-[#FCFBF8] border border-[#FF6A00]/30"
                        : "hover:bg-[#FCFBF8]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[0.88rem] font-semibold text-[#111111] group-hover/item:text-[#FF6A00] transition-colors">
                        {item.title}
                      </span>
                      <span className="text-[0.65rem] font-mono font-medium uppercase tracking-wider text-[#FF6A00]">
                        {item.stage}
                      </span>
                    </div>
                    <span className="mt-0.5 text-xs leading-normal text-[#6B7280]">
                      {item.description}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
