export function AnimatedMenuToggle({
  isOpen,
  onClick,
  className = "",
}: {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E7EB] bg-transparent text-[#111111] transition-all duration-200 hover:border-[#111111] hover:bg-[#FCFBF8] focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:ring-offset-2 active:scale-95 ${className}`}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation-drawer"
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      title={isOpen ? "Close menu (Esc)" : "Open menu"}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Top bar */}
        <line
          x1="4"
          y1="8"
          x2="20"
          y2="8"
          className="origin-center transition-all duration-300 ease-out"
          style={{
            transform: isOpen ? "translateY(4px) rotate(45deg)" : "translateY(0) rotate(0)",
            stroke: isOpen ? "#FF6A00" : "currentColor",
          }}
        />
        {/* Middle bar (fades out when open) */}
        <line
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          className="transition-opacity duration-200 ease-out"
          style={{
            opacity: isOpen ? 0 : 1,
          }}
        />
        {/* Bottom bar */}
        <line
          x1="4"
          y1="16"
          x2="20"
          y2="16"
          className="origin-center transition-all duration-300 ease-out"
          style={{
            transform: isOpen ? "translateY(-4px) rotate(-45deg)" : "translateY(0) rotate(0)",
            stroke: isOpen ? "#FF6A00" : "currentColor",
          }}
        />
      </svg>
    </button>
  );
}
