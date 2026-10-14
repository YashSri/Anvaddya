import type { ReactNode } from "react";
import { cta } from "@/content/site";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { ButtonLink } from "./Button";
import { Icon, type IconName } from "./Icon";

/* ---------------------------------------------------------------- PageHero */

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  aside,
  crumbs,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
  /** Breadcrumb trail after "Home"; the last item is the current page. */
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full border border-brand-200"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-[22rem] w-[22rem] rounded-full border border-brand-200/70"
      />
      <div className="container-site relative grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-24">
        <div className={aside ? "lg:col-span-7" : "lg:col-span-10"}>
          {crumbs ? (
            <div className="mb-8">
              <Breadcrumbs trail={crumbs} />
            </div>
          ) : null}
          <p className="eyebrow">
            <span aria-hidden className="h-px w-6 bg-current opacity-60" />
            {eyebrow}
          </p>
          <h1 className="display mt-5 text-[2.6rem] sm:text-6xl lg:text-7xl">{title}</h1>
          <div className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">{intro}</div>
          {children ? <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div> : null}
        </div>
        {aside ? <div className="lg:col-span-5 lg:self-end">{aside}</div> : null}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Marquee */

export function Marquee({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
          <span className="font-display text-2xl text-white sm:text-3xl">{item}</span>
          <span aria-hidden className="h-2 w-2 rounded-full bg-brand-500" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="on-night overflow-hidden bg-night-900 py-6">
      <p className="sr-only">Technology tracks and real-world domains: {items.join(", ")}.</p>
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]" aria-hidden>
        {row(true)}
        {row(true)}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- FactStrip */

export function FactStrip({ facts }: { facts: { value: string; label: string }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
      {facts.map((f) => (
        <div key={f.label} className="flex flex-col-reverse bg-white p-6 last:col-span-2 sm:last:col-span-1">
          <dt className="mt-2 text-sm font-medium text-ink-soft">{f.label}</dt>
          <dd className="display text-5xl text-brand-600 sm:text-6xl">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ---------------------------------------------------------------- NumberedCards */

export function NumberedCards({
  items,
  columns = 2,
}: {
  items: { title: string; body: ReactNode }[];
  columns?: 2 | 3 | 4;
}) {
  const cols = { 2: "md:grid-cols-2", 3: "md:grid-cols-2 lg:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" }[columns];
  return (
    <ol className={`grid gap-5 ${cols}`}>
      {items.map((item, i) => (
        <li
          key={item.title}
          className="reveal group relative flex flex-col rounded-[var(--radius-card)] border border-line bg-white p-7 transition-shadow hover:shadow-lg hover:shadow-brand-900/5 [.on-night_&]:border-white/10 [.on-night_&]:bg-night-800"
        >
          <span className="display text-4xl text-brand-600 [.on-night_&]:text-brand-400">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
          <div className="mt-2 leading-relaxed text-ink-soft [.on-night_&]:text-white/70">{item.body}</div>
        </li>
      ))}
    </ol>
  );
}

/* ---------------------------------------------------------------- IconCards */

export function IconCards({
  items,
  columns = 4,
}: {
  items: { title: string; body: ReactNode; icon: IconName }[];
  columns?: 2 | 3 | 4;
}) {
  const cols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[columns];
  return (
    <ul className={`grid gap-5 ${cols}`}>
      {items.map((item) => (
        <li
          key={item.title}
          className="reveal rounded-[var(--radius-card)] border border-line bg-white p-7 [.on-night_&]:border-white/10 [.on-night_&]:bg-night-800"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-700 [.on-night_&]:bg-white/10 [.on-night_&]:text-brand-300">
            <Icon name={item.icon} />
          </span>
          <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
          <p className="mt-2 leading-relaxed text-ink-soft [.on-night_&]:text-white/70">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}

/* ---------------------------------------------------------------- CheckList */

export function CheckList({ items, className = "" }: { items: ReactNode[]; className?: string }) {
  return (
    <ul className={`space-y-4 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-3.5">
          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white [.on-night_&]:bg-brand-500 [.on-night_&]:text-ink">
            <Icon name="check" className="h-3.5 w-3.5" />
          </span>
          <span className="text-[1.05rem] leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------------------------------------------------------------- Steps */

export function Steps({
  steps,
  label,
}: {
  steps: { step: string; body: string }[];
  label: string;
}) {
  return (
    <ol aria-label={label} className="relative grid gap-5 md:grid-cols-2 lg:grid-flow-col lg:auto-cols-fr lg:grid-cols-none">
      {steps.map((s, i) => (
        <li
          key={s.step}
          className="reveal relative rounded-[var(--radius-card)] border border-line bg-white p-6 [.on-night_&]:border-white/10 [.on-night_&]:bg-night-800"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-700 [.on-night_&]:text-brand-300">
            Step {i + 1}
          </span>
          <h3 className="display mt-3 text-3xl">{s.step}</h3>
          <p className="mt-3 leading-relaxed text-ink-soft [.on-night_&]:text-white/70">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

/* ---------------------------------------------------------------- CtaBand */

export function CtaBand({
  title = "Bring Applied Learning Into Your School",
  body = "Explore how Anvaddya Orbit can complement your school's learning environment and help students turn curiosity into demonstrable capability.",
  button = "Start a Conversation",
}: {
  title?: string;
  body?: string;
  button?: string;
}) {
  return (
    <section aria-labelledby="cta-band-title" className="on-night on-brand relative overflow-hidden bg-brand-700 text-white">
      <div aria-hidden className="pointer-events-none absolute -bottom-48 -right-24 h-[30rem] w-[30rem] rounded-full border border-white/20" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-8 h-[20rem] w-[20rem] rounded-full border border-white/15" />
      <div className="container-site relative flex flex-col gap-10 py-20 lg:flex-row lg:items-end lg:justify-between lg:py-24">
        <div className="max-w-3xl">
          <h2 id="cta-band-title" className="display text-4xl sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">{body}</p>
        </div>
        <ButtonLink href={cta.primary.href} variant="onBrand" className="w-full shrink-0 sm:w-auto">
          {button}
        </ButtonLink>
      </div>
    </section>
  );
}
