import Link from "next/link";

/**
 * Placeholder wordmark built from type + a simple orbit mark.
 * Replace with the approved Anvaddya Orbit logo when supplied.
 */
export function OrbitMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={`nav-logo-mark ${className}`} aria-hidden>
      <circle cx="16" cy="16" r="6" fill="#FF6A00" />
      <ellipse cx="16" cy="16" rx="14" ry="6.5" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(-28 16 16)" />
      <circle cx="27.4" cy="10" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const text = tone === "light" ? "text-white" : "text-[#111111]";
  return (
    <Link href="/" className={`group flex items-center gap-2.5 ${text} focus:outline-none`} aria-label="Anvaddya Orbit — Home">
      <OrbitMark />
      <span className="nav-logo-text flex flex-col leading-none">
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#6B7280] group-hover:text-[#FF6A00] transition-colors">
          Anvaddya
        </span>
        <span className="font-sans text-[1.35rem] font-bold leading-none tracking-tight text-[#111111]">
          Orbit<span className="text-[#FF6A00]">.</span>
        </span>
      </span>
    </Link>
  );
}
