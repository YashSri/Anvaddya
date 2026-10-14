import React from "react";

export function DomainIcon({ name, className = "h-6 w-6 text-[#FF6A00]" }: { name: string; className?: string }) {
  switch (name) {
    case "drone":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M10 10l-4 -4m0 0a2 2 0 1 0 -2 -2m2 2a2 2 0 1 0 2 -2" />
          <path d="M14 10l4 -4m0 0a2 2 0 1 0 2 -2m-2 2a2 2 0 1 0 -2 -2" />
          <path d="M10 14l-4 4m0 0a2 2 0 1 0 -2 2m2 -2a2 2 0 1 0 2 2" />
          <path d="M14 14l4 4m0 0a2 2 0 1 0 2 2m-2 -2a2 2 0 1 0 -2 2" />
        </svg>
      );
    case "cube":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3z" />
          <path d="M12 12v9" />
          <path d="m20 7.5-8 4.5-8-4.5" />
        </svg>
      );
    case "plant":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 10a6 6 0 0 0 -6 -6H3v3a6 6 0 0 0 6 6h3" />
          <path d="M12 14a6 6 0 0 1 6 -6h3v3a6 6 0 0 1 -6 6h-3" />
          <path d="M12 20V10" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M12 5v14" opacity="0.3" />
        </svg>
      );
    case "flame":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
    case "robot":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4" />
          <line x1="8" y1="16" x2="8" y2="16.01" strokeWidth="2.5" />
          <line x1="16" y1="16" x2="16" y2="16.01" strokeWidth="2.5" />
        </svg>
      );
    case "brain":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
          <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
          <path d="M12 5v13" />
        </svg>
      );
    case "chip":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
        </svg>
      );
    case "satellite":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M13 7 9 3 5 7l4 4" />
          <path d="m17 11 4 4-4 4-4-4" />
          <path d="m8 12 4 4 6-6-4-4Z" />
          <path d="m16 8 3-3" />
          <path d="M9 21a6 6 0 0 0-6-6" />
        </svg>
      );
    case "flask":
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M10 2v7.31L4.62 18.23A2 2 0 0 0 6.32 21h11.36a2 2 0 0 0 1.7-2.77L14 9.31V2" />
          <path d="M8.5 2h7" />
          <path d="M14 9.3h-4" />
        </svg>
      );
  }
}
