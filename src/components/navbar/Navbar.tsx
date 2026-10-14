"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cta } from "@/content/site";
import { SearchPanel } from "./SearchPanel";
import { MobileMenu } from "./MobileMenu";
import { SideMenuDrawer } from "../SideMenuDrawer";

function BrandLogoLockup() {
  return (
    <Link href="/" className="group flex items-center gap-3 focus:outline-none shrink-0" aria-label="Anvaddya Orbit — Home">
      {/* Tilted Black Orbit Ring with Orange Planet Core matching reference image */}
      <div className="relative flex h-7 w-10 items-center justify-center shrink-0">
        <svg viewBox="0 0 40 26" className="h-6 w-10 select-none" fill="none">
          {/* Black Ellipse Orbit Ring */}
          <ellipse
            cx="20"
            cy="13"
            rx="16"
            ry="6.5"
            stroke="#111111"
            strokeWidth="2.4"
            transform="rotate(-20 20 13)"
          />
          {/* Vibrant Orange Core Sphere */}
          <circle cx="20" cy="13" r="5.5" fill="#FF6A00" />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#374151]">
          ANVADDYA
        </span>
        <span className="font-sans text-[1.25rem] font-bold tracking-tight text-[#111111]">
          Orbit
        </span>
      </div>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [programmeOpen, setProgrammeOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProgrammeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "Technology & Domains", href: "/technology-and-domains" },
    { label: "Student Outcomes", href: "/student-outcomes" },
    { label: "For Schools", href: "/for-schools" },
    { label: "Events", href: "/events" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full px-4 sm:px-6 pt-4 pb-2">
        <div className="mx-auto flex h-[68px] w-full max-w-[1360px] items-center justify-between rounded-full border border-gray-200/90 bg-white px-5 sm:px-8 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] transition-all">
          {/* LEFT: Logo Lockup & Divider */}
          <div className="flex items-center">
            <BrandLogoLockup />
            <div className="hidden lg:block h-6 w-px bg-gray-200 ml-6 mr-8" aria-hidden="true" />
          </div>

          {/* CENTER: Navigation Links (Desktop) */}
          <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-7 xl:gap-8">
            {/* Programme Dropdown with active orange underline */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setProgrammeOpen(true)}
              onMouseLeave={() => setProgrammeOpen(false)}
            >
              <button
                type="button"
                onClick={() => setProgrammeOpen((v) => !v)}
                className="group relative flex items-center gap-1.5 py-1 text-[0.92rem] font-medium text-[#111111] hover:text-[#FF6A00] transition-colors focus:outline-none"
                aria-expanded={programmeOpen}
              >
                <span>Programme</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 text-[#6B7280] transition-transform duration-200 ${
                    programmeOpen ? "rotate-180 text-[#FF6A00]" : "group-hover:text-[#FF6A00]"
                  }`}
                />
                {/* Active Orange Underline Bar as shown in reference image */}
                <span
                  className="absolute -bottom-2 left-0 h-[2.5px] w-full bg-[#FF6A00] rounded-full"
                  aria-hidden="true"
                />
              </button>

              {/* Dropdown panel */}
              {programmeOpen && (
                <div className="absolute left-0 top-full pt-3 z-50">
                  <div className="w-80 rounded-2xl border border-[#E5E7EB] bg-white p-2.5 shadow-xl">
                    <ul className="space-y-1">
                      {[
                        { title: "The Programme", href: "/programme", desc: "A year-round, school-embedded STEM layer" },
                        { title: "Curriculum Journey", href: "/curriculum", desc: "Classes 1–12 progression stage by stage" },
                        { title: "How We Learn", href: "/how-we-learn", desc: "See-the-Science and the FORGE loop" },
                        { title: "Stream Choice & Pathways", href: "/stream-choice", desc: "Evidence-driven guidance for senior school" },
                      ].map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setProgrammeOpen(false)}
                            className="block rounded-xl px-3.5 py-2.5 transition-colors hover:bg-[#FCFBF8]"
                          >
                            <span className="block text-sm font-semibold text-[#111111]">
                              {item.title}
                            </span>
                            <span className="block text-xs text-[#6B7280]">
                              {item.desc}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[0.92rem] font-medium transition-colors ${
                    isActive ? "text-[#FF6A00] font-semibold" : "text-[#111111] hover:text-[#FF6A00]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Search, Partner CTA, Menu Button */}
          <div className="flex items-center gap-3 sm:gap-3.5">
            {/* Divider */}
            <div className="hidden sm:block h-6 w-px bg-gray-200 mr-1.5" aria-hidden="true" />

            {/* Circular Gray Search Button */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F3F4F6] text-[#374151] transition-all hover:bg-[#E5E7EB] hover:text-[#111111] active:scale-95 focus:outline-none"
              aria-label="Search website (Ctrl+K)"
              title="Search (Ctrl+K)"
            >
              <Search className="h-4 w-4" />
            </button>

            {/* Solid Orange Pill Button: Partner With Us ↗ */}
            <Link
              href={cta.primary.href}
              className="group inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-150 active:scale-95 shadow-sm"
              style={{ backgroundColor: "#FF6A00" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E65F00")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF6A00")}
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Circular Gray Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F3F4F6] text-[#374151] transition-all hover:bg-[#E5E7EB] hover:text-[#111111] active:scale-95 focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              title="Menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4 text-[#FF6A00]" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      <SearchPanel isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile Menu Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Desktop Side Menu Drawer */}
      <div className="hidden lg:block">
        <SideMenuDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
}
