"use client";

import { useEffect, useRef, useState } from "react";

type MetricItem = {
  target: number;
  suffix: string;
  label: string;
};

const METRICS: MetricItem[] = [
  { target: 50, suffix: "K+", label: "STUDENTS IMPACTED" },
  { target: 500, suffix: "+", label: "SCHOOLS" },
  { target: 10, suffix: "+", label: "TECH DOMAINS" },
];

export function ImpactMetrics({ className = "" }: { className?: string }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setCounts(METRICS.map((m) => m.target));
      return;
    }

    const duration = 1200; // ms
    const startTime = performance.now();

    const frame = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - (1 - progress) * (1 - progress);

      setCounts(METRICS.map((m) => Math.floor(ease * m.target)));

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        setCounts(METRICS.map((m) => m.target));
      }
    };

    const id = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(id);
  }, [hasAnimated]);

  return (
    <div
      ref={containerRef}
      className={`hero-metrics flex items-center gap-6 sm:gap-8 ${className}`}
    >
      {METRICS.map((metric, i) => (
        <div key={metric.label} className="flex items-center gap-6 sm:gap-8">
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <span className="font-sans text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl lg:text-4xl">
                {counts[i]}
              </span>
              <span className="font-sans text-xl font-bold tracking-tight text-[#111111] sm:text-2xl lg:text-3xl">
                {metric.suffix}
              </span>
            </div>
            <span className="mt-1 text-[0.65rem] sm:text-[0.7rem] font-sans font-bold uppercase tracking-wider text-[#9CA3AF]">
              {metric.label}
            </span>
          </div>

          {/* Vertical divider line between metrics */}
          {i < METRICS.length - 1 && (
            <div className="h-9 w-[1px] bg-[#E5E7EB]" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}
