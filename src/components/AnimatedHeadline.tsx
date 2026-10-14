export function AnimatedHeadline({ className = "" }: { className?: string }) {
  return (
    <h1
      className={`hero-headline font-sans text-[2.75rem] font-bold leading-[1.05] tracking-[-0.03em] text-[#111111] sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] ${className}`}
    >
      {/* Line 1: Real Learning */}
      <span className="block overflow-hidden">
        <span className="hero-headline-line block translate-y-0 opacity-100 will-change-transform">
          Real Learning
        </span>
      </span>

      {/* Line 2: for a Bolder */}
      <span className="block overflow-hidden">
        <span className="hero-headline-line block translate-y-0 opacity-100 will-change-transform">
          for a{" "}
          <span className="text-[#FF6A00]">Bolder</span>
        </span>
      </span>

      {/* Line 3: Generation. */}
      <span className="block overflow-hidden">
        <span className="hero-headline-line block translate-y-0 opacity-100 will-change-transform">
          Generation<span className="text-[#FF6A00]">.</span>
        </span>
      </span>
    </h1>
  );
}

