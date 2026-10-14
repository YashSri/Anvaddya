"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Layers } from "lucide-react";
import { stages } from "@/content/journey";

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HowItWorksModal({ isOpen, onClose }: HowItWorksModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="how-it-works-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
    >
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-[#111111]/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Surface */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#E5E7EB] bg-[#FCFBF8] p-6 sm:p-10 shadow-2xl">
        {/* Header with Close Button */}
        <div className="flex items-start justify-between gap-4 border-b border-[#E5E7EB] pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FF6A00]" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
                HOW ORBIT WORKS
              </span>
            </div>
            <h2
              id="how-it-works-modal-title"
              className="mt-2 font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]"
            >
              School-Integrated STEM & Innovation Framework
            </h2>
            <p className="mt-1 text-sm text-[#6B7280]">
              Sitting parallel to school timetables from Class 1 to Class 12.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111111] hover:border-[#FF6A00] hover:text-[#FF6A00] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00]"
            aria-label="Close dialogue"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* 3 Core Operating Principles */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#FF6A00] mb-3">
              <Layers className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-sm text-[#111111]">Timetable Harmony</h3>
            <p className="mt-1 text-xs text-[#6B7280] leading-relaxed">
              Sessions run strictly within scheduled co-curricular or lab periods with zero added homework.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#FF6A00] mb-3">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-sm text-[#111111]">Board-Aware Rhythm</h3>
            <p className="mt-1 text-xs text-[#6B7280] leading-relaxed">
              Pauses and lightens during major examination windows (term assessments and board prep).
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#FF6A00] mb-3">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-sm text-[#111111]">Living Portfolios</h3>
            <p className="mt-1 text-xs text-[#6B7280] leading-relaxed">
              Every build produces verified evidence of competency for college applications and showcases.
            </p>
          </div>
        </div>

        {/* The 7 Progression Stages */}
        <div className="mt-8">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-4">
            THE 7 CONTINUOUS LEARNING STAGES
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {stages.map((stg) => (
              <div
                key={stg.id}
                className="rounded-xl border border-[#E5E7EB] bg-white p-4 hover:border-[#FF6A00]/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#111111]">{stg.name}</span>
                  <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md bg-orange-50 text-[#FF6A00]">
                    {stg.classes}
                  </span>
                </div>
                <p className="mt-1 text-xs font-medium text-[#FF6A00]">{stg.focus}</p>
                <p className="mt-1 text-xs text-[#6B7280] line-clamp-2 leading-relaxed">
                  {stg.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-[#6B7280]">
            Ready to explore partnership options for your institution?
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full px-5 py-2 text-xs font-semibold text-[#6B7280] hover:text-[#111111] transition-colors"
            >
              Close
            </button>
            <Link
              href="/how-we-learn"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#E05D00] transition-colors"
            >
              Explore Full Curriculum Pathway
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
