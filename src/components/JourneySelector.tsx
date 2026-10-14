"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { stages } from "@/content/journey";
import { Icon } from "./Icon";

/** Accessible tab interface for the seven curriculum stages (WAI-ARIA tabs pattern). */
export function JourneySelector() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const stage = stages[active];

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = stages.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      {/* progress rail */}
      <div className="relative">
        {/* Rail spans first-to-last column centre (each column is 1/7 wide, so inset 1/14 each side). */}
        <div aria-hidden className="absolute left-[calc(100%/14)] right-[calc(100%/14)] top-[1.375rem] hidden h-px bg-white/15 md:block">
          <div
            className="h-px bg-brand-500 transition-[width] duration-500"
            style={{ width: `${(active / (stages.length - 1)) * 100}%` }}
          />
        </div>
        <div
          role="tablist"
          aria-label="Curriculum stages"
          className="relative -mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-7 md:overflow-visible md:px-0"
        >
          {stages.map((s, i) => {
            const selected = i === active;
            return (
              <button
                key={s.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`stage-tab-${s.id}`}
                aria-selected={selected}
                aria-controls={`stage-panel-${s.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={onKeyDown}
                className="group flex shrink-0 snap-start flex-col items-start gap-3 text-left md:items-center md:text-center"
              >
                <span
                  className={`flex h-11 min-w-11 items-center justify-center rounded-full border px-3 text-sm font-bold transition-colors ${
                    selected
                      ? "border-brand-500 bg-brand-500 text-ink"
                      : i < active
                        ? "border-brand-500 bg-night-900 text-brand-300"
                        : "border-white/25 bg-night-900 text-white/70 group-hover:border-brand-300"
                  }`}
                >
                  {s.short}
                </span>
                <span
                  className={`whitespace-nowrap text-xs font-bold uppercase tracking-[0.16em] ${
                    selected ? "text-white" : "text-white/55 group-hover:text-white/85"
                  }`}
                >
                  {s.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        role="tabpanel"
        id={`stage-panel-${stage.id}`}
        aria-labelledby={`stage-tab-${stage.id}`}
        tabIndex={0}
        className="mt-10 grid gap-8 rounded-2xl border border-white/10 bg-night-800 p-7 sm:p-10 lg:grid-cols-12"
      >
        <div className="lg:col-span-7">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-300">
            {stage.classes} · {stage.focus}
          </p>
          <h3 className="display mt-3 text-5xl sm:text-6xl">{stage.name}</h3>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{stage.summary}</p>
          {stage.senior ? (
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80">
              <span className="h-2 w-2 rounded-full bg-brand-400" aria-hidden />
              Senior-school pathway{stage.rhythm ? ` · ${stage.rhythm}` : ""}
            </p>
          ) : null}
        </div>
        <div className="lg:col-span-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">What it involves</p>
          <ul className="mt-4 space-y-3">
            {stage.involves.map((item) => (
              <li key={item} className="flex gap-3 text-white/90">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-brand-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
