import Link from "next/link";

export function BrandMark({
  className = "h-8 w-8",
  tone = "orange",
}: {
  className?: string;
  tone?: "orange" | "monochrome" | "white";
}) {
  const bgFill = tone === "white" ? "#FFFFFF" : tone === "monochrome" ? "#111111" : "#FF6A00";
  const iconStroke = tone === "white" ? "#FF6A00" : "#FFFFFF";

  return (
    <div
      className={`inline-flex items-center justify-center rounded-none ${className}`}
      style={{ backgroundColor: bgFill }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 32 32" className="h-4/5 w-4/5" fill="none">
        {/* Flat 2D geometric orbit node system */}
        <circle cx="16" cy="16" r="4.5" fill={iconStroke} />
        {/* Orthogonal orbit axes */}
        <line x1="16" y1="3" x2="16" y2="7" stroke={iconStroke} strokeWidth="1.75" />
        <line x1="16" y1="25" x2="16" y2="29" stroke={iconStroke} strokeWidth="1.75" />
        <line x1="3" y1="16" x2="7" y2="16" stroke={iconStroke} strokeWidth="1.75" />
        <line x1="25" y1="16" x2="29" y2="16" stroke={iconStroke} strokeWidth="1.75" />
        {/* Precise flat ring */}
        <circle cx="16" cy="16" r="10" stroke={iconStroke} strokeWidth="1.5" strokeDasharray="3 3" />
        {/* Orbital satellite square node */}
        <rect x="22" y="8" width="3" height="3" fill={iconStroke} />
      </svg>
    </div>
  );
}

export function BrandLogo({
  tone = "dark",
  compact = false,
}: {
  tone?: "dark" | "light";
  compact?: boolean;
}) {
  const titleColor = tone === "light" ? "text-[#FFFFFF]" : "text-[#111111]";
  const subColor = tone === "light" ? "text-[#FFFFFF]/70" : "text-[#6B7280]";

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 focus:outline-none"
      aria-label="Anvaddya Orbit — Home"
    >
      <BrandMark className="h-8 w-8 transition-transform group-hover:scale-95" />
      <div className="flex flex-col leading-none">
        <span
          className={`text-[0.62rem] font-mono font-bold uppercase tracking-[0.24em] ${subColor} transition-colors group-hover:text-[#FF6A00]`}
        >
          Anvaddya
        </span>
        <span
          className={`font-sans text-[1.25rem] font-bold tracking-tight ${titleColor}`}
        >
          Orbit
          <span className="text-[#FF6A00]">.</span>
        </span>
      </div>
    </Link>
  );
}
