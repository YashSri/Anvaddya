import type { ReactNode } from "react";

type Tone = "white" | "cream" | "night" | "brand";

const tones: Record<Tone, string> = {
  white: "bg-white text-ink",
  cream: "bg-cream text-ink",
  night: "on-night bg-night-900 text-white",
  brand: "on-night on-brand bg-brand-700 text-white",
};

export function Section({
  id,
  tone = "white",
  children,
  className = "",
  labelledBy,
}: {
  id?: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} py-20 sm:py-24 lg:py-28 ${className}`}>
      <div className="container-site">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
  as: As = "h2",
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  const center = align === "center";
  return (
    <div className={`reveal ${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {eyebrow ? (
        <p className={`eyebrow ${center ? "justify-center" : ""}`}>
          <span aria-hidden className="h-px w-6 bg-current opacity-60" />
          {eyebrow}
        </p>
      ) : null}
      <As id={id} className="display mt-4 text-4xl sm:text-5xl lg:text-[3.5rem]">
        {title}
      </As>
      {intro ? (
        <div className="mt-5 text-lg leading-relaxed text-ink-soft [.on-night_&]:text-white/75">{intro}</div>
      ) : null}
    </div>
  );
}

/** Italic orange accent inside serif headings (Mesa-style emphasis). */
export function Accent({ children }: { children: ReactNode }) {
  return <em className="italic text-brand-600 [.on-night_&]:text-brand-400">{children}</em>;
}
