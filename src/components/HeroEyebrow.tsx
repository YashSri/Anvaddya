export function HeroEyebrow({ className = "" }: { className?: string }) {
  return (
    <div className={`hero-eyebrow flex flex-wrap items-center gap-2 sm:gap-3 ${className}`}>
      {/* Orange circle dot */}
      <span className="hero-eyebrow-dot h-2 w-2 rounded-full bg-[#FF6A00] shrink-0" aria-hidden="true" />
      
      {/* Main eyebrow category */}
      <span className="text-[0.68rem] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
        SCHOOL INNOVATION ECOSYSTEM
      </span>

      {/* ANIM-TXT-03: Expanding Horizontal Eyebrow Wing */}
      <span className="hero-eyebrow-line hidden sm:inline-block h-[1.5px] w-10 bg-[#FF6A00]/70 origin-left" aria-hidden="true" />

      {/* Sub-tags */}
      <span className="text-[0.65rem] sm:text-[0.7rem] font-mono tracking-widest text-[#9CA3AF] uppercase">
        IDEAS <span className="text-[#D1D5DB]">/</span> EXPERIMENT <span className="text-[#D1D5DB]">/</span> BUILD <span className="text-[#D1D5DB]">/</span> TEST <span className="text-[#D1D5DB]">/</span> IMPACT
      </span>
    </div>
  );
}

