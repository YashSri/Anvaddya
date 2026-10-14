"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { BrandMark } from "./BrandLogo";
import { cta } from "@/content/site";

export function EcosystemModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      closeBtnRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ecosystem-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#111111]/50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-xl border border-[#111111] bg-[#FFFFFF] p-6 shadow-2xl transition-all sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-5">
          <div className="flex items-center gap-3">
            <BrandMark className="h-9 w-9" />
            <div>
              <span className="text-[0.68rem] font-mono font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
                Architecture Overview
              </span>
              <h2 id="ecosystem-title" className="text-xl font-bold tracking-tight text-[#111111]">
                The Innovation Circuit
              </h2>
            </div>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center border border-[#E5E7EB] text-[#111111] transition-colors hover:border-[#111111] hover:text-[#FF6A00]"
            aria-label="Close overview"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6">
          <p className="text-sm leading-relaxed text-[#111111]">
            Anvaddya Orbit translates natural student curiosity into verifiable capability.
            Instead of fragmented workshops or one-off hobby kits, Orbit embeds a structured,
            year-round engineering and research loop into the school day across Classes 1–12.
          </p>

          <div className="mt-6 space-y-3.5">
            <div className="flex items-start gap-3 border border-[#E5E7EB] bg-[#FCFBF8] p-3.5">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FF6A00] mt-0.5" />
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111]">
                  Curiosity to Capability
                </span>
                <p className="mt-0.5 text-xs text-[#6B7280]">
                  Structured problem framing, hands-on fabrication, embedded circuits, and iterative debugging.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 border border-[#E5E7EB] bg-[#FCFBF8] p-3.5">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FF6A00] mt-0.5" />
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111]">
                  Capability to Evidence
                </span>
                <p className="mt-0.5 text-xs text-[#6B7280]">
                  Authenticated technical logs, competition entries, and comprehensive student portfolios.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 border border-[#E5E7EB] bg-[#FCFBF8] p-3.5">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FF6A00] mt-0.5" />
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111]">
                  Campus-Embedded Delivery
                </span>
                <p className="mt-0.5 text-xs text-[#6B7280]">
                  Full-time on-campus STEM specialists, structured hardware inventories, and teacher development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col gap-3 border-t border-[#E5E7EB] pt-5 sm:flex-row">
          <Link
            href="/programme"
            onClick={onClose}
            className="flex flex-1 items-center justify-center gap-2 border border-[#E5E7EB] bg-[#FCFBF8] py-3 text-xs font-semibold uppercase tracking-wider text-[#111111] transition-colors hover:border-[#111111]"
          >
            <span>Explore Full Programme</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href={cta.primary.href}
            onClick={onClose}
            className="flex flex-1 items-center justify-center gap-2 border border-[#FF6A00] bg-[#FF6A00] py-3 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] transition-colors hover:bg-[#111111] hover:border-[#111111]"
          >
            <span>Discuss Partnership</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
