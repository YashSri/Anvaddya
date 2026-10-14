export function CircuitIcon({
  name,
  className = "h-5 w-5",
  strokeColor = "currentColor",
}: {
  name: "lightbulb" | "cube" | "signal" | "document" | "bars";
  className?: string;
  strokeColor?: string;
}) {
  switch (name) {
    case "lightbulb":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      );
    case "cube":
      // Strictly flat 2D isometric/orthographic geometric cube outline without perspective gradients
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3z" />
          <path d="M12 12v9" />
          <path d="m20 7.5-8 4.5-8-4.5" />
        </svg>
      );
    case "signal":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 10a14 14 0 0 1 20 0" />
          <path d="M5 13a10 10 0 0 1 14 0" />
          <path d="M8.5 16.5a5 5 0 0 1 7 0" />
          <circle cx="12" cy="20" r="1.25" fill={strokeColor} />
        </svg>
      );
    case "document":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      );
    case "bars":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="12" y1="20" x2="12" y2="9" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <line x1="3" y1="20" x2="21" y2="20" />
        </svg>
      );
  }
}
