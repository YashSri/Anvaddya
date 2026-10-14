import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export function SchoolIcon({ className = "w-6 h-6", size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Roof Pediment & Flag */}
      <path d="M12 2v3" />
      <path d="M12 2l3 1.5-3 1.5" fill="currentColor" fillOpacity="0.2" />
      <path d="M3 9.5L12 5l9 4.5" />
      {/* Base / Architrave */}
      <path d="M4 10h16" />
      {/* Columns */}
      <path d="M6 10v9" />
      <path d="M10 10v9" />
      <path d="M14 10v9" />
      <path d="M18 10v9" />
      {/* Doorway in Center */}
      <path d="M10 19v-4a2 2 0 0 1 4 0v4" />
      {/* Ground plinth */}
      <path d="M2 21h20" />
    </svg>
  );
}

export function CubeIcon({ className = "w-6 h-6", size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Isometric Cube */}
      <path d="M12 2.5L20.5 7.5V16.5L12 21.5L3.5 16.5V7.5L12 2.5Z" />
      <path d="M12 12V21.5" />
      <path d="M12 12L20.5 7.5" />
      <path d="M12 12L3.5 7.5" />
    </svg>
  );
}

export function BookIcon({ className = "w-6 h-6", size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Open Book */}
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22.5" />
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2" />
      <path d="M4 4.5V22.5" />
      <path d="M12 6v11" />
      <path d="M8 7h1" />
      <path d="M8 11h1" />
      <path d="M15 7h2" />
      <path d="M15 11h2" />
    </svg>
  );
}

export function DocumentIcon({ className = "w-6 h-6", size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Document Sheet */}
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8" />
      <path d="M8 11h8" />
      <path d="M8 15h5" />
    </svg>
  );
}

export function GrowthIcon({ className = "w-6 h-6", size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Ascending Milestone Bars */}
      <rect x="4" y="14" width="3.5" height="7" rx="1" />
      <rect x="10.25" y="9" width="3.5" height="12" rx="1" />
      <rect x="16.5" y="4" width="3.5" height="17" rx="1" />
    </svg>
  );
}

export function FrameworkIcon({
  name,
  className,
  size = 24,
}: {
  name: "school" | "cube" | "book" | "document" | "growth";
  className?: string;
  size?: number;
}) {
  switch (name) {
    case "school":
      return <SchoolIcon className={className} size={size} />;
    case "cube":
      return <CubeIcon className={className} size={size} />;
    case "book":
      return <BookIcon className={className} size={size} />;
    case "document":
      return <DocumentIcon className={className} size={size} />;
    case "growth":
      return <GrowthIcon className={className} size={size} />;
    default:
      return null;
  }
}
