"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Search, X, ArrowRight, CornerDownLeft } from "lucide-react";

type SearchItem = {
  title: string;
  category: "Programme" | "Curriculum" | "Domains" | "Outcomes" | "Schools" | "Connect";
  href: string;
  description: string;
};

const SEARCH_ITEMS: SearchItem[] = [
  {
    title: "The Programme Overview",
    category: "Programme",
    href: "/programme",
    description: "A year-round, school-embedded STEM and innovation layer.",
  },
  {
    title: "Curriculum Journey (Classes 1–12)",
    category: "Curriculum",
    href: "/curriculum",
    description: "7 progressive learning stages from primary curiosity to high school research.",
  },
  {
    title: "How We Learn (FORGE Loop)",
    category: "Programme",
    href: "/how-we-learn",
    description: "See-the-Science methodology and the FORGE engineering cycle.",
  },
  {
    title: "Technology & Domains",
    category: "Domains",
    href: "/technology-and-domains",
    description: "STEM, Robotics, IoT, AI, and Research tracks.",
  },
  {
    title: "Student Outcomes & Portfolios",
    category: "Outcomes",
    href: "/student-outcomes",
    description: "Verified capability portfolios, competition readiness, and college profiles.",
  },
  {
    title: "For Schools & Leadership",
    category: "Schools",
    href: "/for-schools",
    description: "Curriculum integration, on-campus facilitators, and lab enablement.",
  },
  {
    title: "Events & Hackathons",
    category: "Connect",
    href: "/events",
    description: "Orbit Ideathon, Maker Expo, and masterclasses with industry practitioners.",
  },
  {
    title: "Stream Choice & Future Pathways",
    category: "Curriculum",
    href: "/stream-choice",
    description: "Evidence-driven guidance for high-school stream and career selection.",
  },
  {
    title: "Partner With Us / Contact",
    category: "Connect",
    href: "/contact",
    description: "Schedule a dialogue for bringing Anvaddya Orbit to your school.",
  },
  {
    title: "Frequently Asked Questions",
    category: "Connect",
    href: "/faq",
    description: "Answers about curriculum timing, fees, hardware kits, and school setup.",
  },
];

export function SearchDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchInputId = useId();

  const filtered = useMemo(() => {
    if (!query.trim()) return SEARCH_ITEMS.slice(0, 6);
    const q = query.toLowerCase();
    return SEARCH_ITEMS.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query]);

  // Autofocus input on open and reset query
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Key navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered.length, onClose]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={searchInputId}
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#111111]/40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-none border border-[#E5E7EB] bg-[#FFFFFF] shadow-2xl transition-all">
        {/* Top Search Bar */}
        <div className="flex items-center gap-3 border-b border-[#E5E7EB] px-4 py-3 sm:px-6">
          <Search className="h-5 w-5 text-[#FF6A00]" aria-hidden="true" />
          <input
            id={searchInputId}
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search programme, domains, outcomes, or questions..."
            className="w-full bg-transparent text-[0.95rem] text-[#111111] placeholder:text-[#6B7280] focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="p-1 text-[#6B7280] hover:text-[#111111]"
              aria-label="Clear search query"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="rounded-none border border-[#E5E7EB] px-2 py-1 text-xs font-mono text-[#6B7280] hover:border-[#111111] hover:text-[#111111]"
            aria-label="Close search"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-2 sm:p-4">
          {filtered.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-sm text-[#6B7280]">No results found for “{query}”.</p>
              <p className="mt-1 text-xs text-[#6B7280]">Try searching for “Robotics”, “Curriculum”, or “Schools”.</p>
            </div>
          ) : (
            <ul className="space-y-1">
              {filtered.map((item, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`group flex items-center justify-between border px-4 py-3 transition-colors ${
                        isSelected
                          ? "border-[#FF6A00] bg-[#FCFBF8]"
                          : "border-transparent hover:border-[#E5E7EB] hover:bg-[#FCFBF8]"
                      }`}
                    >
                      <div className="flex-1 pr-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#FF6A00]">
                            {item.category}
                          </span>
                          <span className="text-sm font-semibold text-[#111111]">
                            {item.title}
                          </span>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-[#6B7280]">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-mono text-[#6B7280] opacity-0 transition-opacity group-hover:opacity-100">
                        <span>Select</span>
                        <ArrowRight className="h-3 w-3 text-[#FF6A00]" />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between border-t border-[#E5E7EB] bg-[#FCFBF8] px-4 py-2.5 text-[0.75rem] font-mono text-[#6B7280]">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <span className="rounded border border-[#E5E7EB] bg-[#FFFFFF] px-1 py-0.5 text-[0.65rem]">↑</span>
              <span className="rounded border border-[#E5E7EB] bg-[#FFFFFF] px-1 py-0.5 text-[0.65rem]">↓</span>
              Navigate
            </span>
            <span className="inline-flex items-center gap-1">
              <CornerDownLeft className="h-3 w-3" />
              Open
            </span>
          </div>
          <span className="uppercase tracking-widest text-[#FF6A00]">Anvaddya Orbit Index</span>
        </div>
      </div>
    </div>
  );
}
