"use client";

import { useState } from "react";
import type { ExplorerItem } from "@/content/tracks";
import { Icon } from "./Icon";

/**
 * Selectable cards that reveal a short explanation and illustrative project examples.
 * Each card is an independent disclosure, so it works the same with keyboard, touch, and screen readers.
 */
export function Explorer({ items, idPrefix }: { items: ExplorerItem[]; idPrefix: string }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <ul className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => {
        const isOpen = open === item.id;
        const panelId = `${idPrefix}-${item.id}`;
        return (
          <li
            key={item.id}
            className={`reveal rounded-[var(--radius-card)] border bg-white transition-shadow ${
              isOpen ? "border-brand-500 shadow-xl shadow-brand-900/10" : "border-line hover:shadow-lg hover:shadow-brand-900/5"
            }`}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : item.id)}
                className="flex w-full items-start gap-4 rounded-[var(--radius-card)] p-6 text-left"
              >
                <span
                  className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors ${
                    isOpen ? "bg-brand-700 text-white" : "bg-brand-50 text-brand-700"
                  }`}
                >
                  <Icon name={item.icon} />
                </span>
                <span className="flex-1">
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-ink-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block text-xl font-bold text-ink">{item.title}</span>
                  <span className="mt-1.5 block font-normal leading-relaxed text-ink-soft">{item.short}</span>
                </span>
                <Icon
                  name="plus"
                  className={`mt-1 h-5 w-5 shrink-0 text-brand-700 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                />
              </button>
            </h3>
            <div id={panelId} hidden={!isOpen} className="border-t border-line px-6 pb-6 pt-5">
              <p className="leading-relaxed text-ink">{item.detail}</p>
              <p className="mt-5 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-800">
                Illustrative project ideas
              </p>
              <ul className="mt-3 space-y-2.5">
                {item.examples.map((ex) => (
                  <li key={ex} className="flex gap-2.5 text-ink-soft">
                    <Icon name="arrow" className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
