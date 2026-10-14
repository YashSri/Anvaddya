import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "onNight" | "onNightOutline" | "onBrand";

const styles: Record<Variant, string> = {
  primary: "bg-brand-700 text-white hover:bg-brand-800 shadow-sm shadow-brand-900/10",
  secondary: "border border-ink/20 text-ink hover:border-brand-700 hover:text-brand-700 bg-white/60",
  onNight: "bg-brand-500 text-ink hover:bg-brand-400",
  onNightOutline: "border border-white/30 text-white hover:border-brand-300 hover:text-brand-200",
  onBrand: "bg-white text-brand-800 hover:bg-brand-50",
};

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-colors duration-200";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      <span>{children}</span>
      {arrow ? (
        <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      ) : null}
    </Link>
  );
}

export function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 font-semibold text-brand-700 underline-offset-4 hover:underline ${className}`}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export const buttonClasses = { base, ...styles };
