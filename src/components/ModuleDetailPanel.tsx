"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { X, ArrowRight, Layers, ExternalLink } from "lucide-react";
import { type CircuitModule } from "@/content/circuitData";
import { CircuitIcon } from "./CircuitIcons";

export function ModuleDetailPanel({
  module,
  onClose,
}: {
  module: CircuitModule | null;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (module) {
      closeBtnRef.current?.focus();
    }
  }, [module]);

  useEffect(() => {
    if (!module) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [module, onClose]);

  if (!module) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${module.title} Module Details`}
      className="absolute inset-0 z-30 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Semi-opaque flat backdrop */}
      <div
        className="absolute inset-0 bg-[#111111]/30 transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Detail Card Panel */}
      <div
        ref={panelRef}
        className="relative z-10 w-full max-w-lg border border-[#111111] bg-[#FFFFFF] p-6 shadow-xl transition-all duration-200 sm:p-8"
      >
        {/* Card Header */}
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border border-[#FF6A00] bg-[#FCFBF8] text-[#FF6A00]">
              <CircuitIcon name={module.iconName} className="h-5 w-5" strokeColor="#FF6A00" />
            </span>
            <div>
              <span className="text-[0.68rem] font-mono font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
                {module.index} // {module.microLabel}
              </span>
              <span className="block text-xs font-mono text-[#6B7280]">
                {module.annotation}
              </span>
            </div>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center border border-[#E5E7EB] text-[#111111] transition-colors hover:border-[#111111] hover:text-[#FF6A00]"
            aria-label="Close detail panel"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-5">
          <h3 className="text-xl font-bold tracking-tight text-[#111111] sm:text-2xl">
            {module.title}
            <span className="ml-2 font-normal text-[#6B7280]">· {module.subtitle}</span>
          </h3>

          <div className="mt-2.5 inline-flex items-center gap-1.5 border border-[#E5E7EB] bg-[#FCFBF8] px-2.5 py-1 text-xs font-mono text-[#111111]">
            <Layers className="h-3 w-3 text-[#FF6A00]" />
            <span>{module.stage}</span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-[#111111]">
            {module.description}
          </p>

          <div className="mt-5 border-t border-[#E5E7EB] pt-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#6B7280]">
              Primary Domain Link
            </span>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-sm font-semibold text-[#111111]">
                {module.domain}
              </span>
              <Link
                href={module.domainHref}
                className="inline-flex items-center gap-1 text-xs font-mono text-[#FF6A00] hover:underline"
              >
                <span>View Domain</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="border-t border-[#E5E7EB] pt-5">
          <Link
            href={module.actionHref}
            className="group flex w-full items-center justify-center gap-2 border border-[#FF6A00] bg-[#FF6A00] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] transition-all hover:bg-[#111111] hover:border-[#111111]"
          >
            <span>{module.actionLabel}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
