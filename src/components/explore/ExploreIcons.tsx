import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export function CompassIcon({ className = "w-6 h-6", size = 24, ...props }: IconProps) {
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
      <circle cx="12" cy="12" r="9.5" />
      <polygon points="15.5 8.5 13.5 13.5 8.5 15.5 10.5 10.5 15.5 8.5" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

export function NetworkIcon({ className = "w-6 h-6", size = 24, ...props }: IconProps) {
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
      <rect x="9.5" y="3" width="5" height="4.5" rx="1" />
      <rect x="3" y="16.5" width="5" height="4.5" rx="1" />
      <rect x="16" y="16.5" width="5" height="4.5" rx="1" />
      <path d="M12 7.5v4.5M5.5 16.5v-4.5h13v4.5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function RobotIcon({ className = "w-6 h-6", size = 24, ...props }: IconProps) {
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
      <rect x="4" y="8" width="16" height="12" rx="3" />
      <path d="M12 4v4" />
      <circle cx="12" cy="3" r="1" fill="currentColor" />
      <circle cx="9" cy="13" r="1.5" fill="currentColor" />
      <circle cx="15" cy="13" r="1.5" fill="currentColor" />
      <path d="M9.5 17h5" />
      <path d="M2 13h2M20 13h2" />
    </svg>
  );
}

export function BulbIcon({ className = "w-6 h-6", size = 24, ...props }: IconProps) {
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
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
      <path d="M11 9.5l1-2 1 2" strokeWidth="1.2" />
    </svg>
  );
}

export function FolderIcon({ className = "w-6 h-6", size = 24, ...props }: IconProps) {
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
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
      <line x1="7" y1="13" x2="13" y2="13" strokeWidth="1.4" />
    </svg>
  );
}

export function ScaleIcon({ className = "w-6 h-6", size = 24, ...props }: IconProps) {
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
      <line x1="12" y1="3" x2="12" y2="21" />
      <path d="M5 7h14" />
      <path d="M5 7l-3 6a3 3 0 0 0 6 0L5 7z" />
      <path d="M19 7l-3 6a3 3 0 0 0 6 0l-3-6z" />
      <line x1="8" y1="21" x2="16" y2="21" />
    </svg>
  );
}

export function CapIcon({ className = "w-6 h-6", size = 24, ...props }: IconProps) {
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
      <path d="M2 9l10-5 10 5-10 5L2 9z" />
      <path d="M6 11.5v5c3 2 9 2 12 0v-5" />
      <path d="M22 9v6" />
    </svg>
  );
}

export function CalendarIcon({ className = "w-6 h-6", size = 24, ...props }: IconProps) {
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
      <rect x="3" y="4.5" width="18" height="16.5" rx="2" />
      <line x1="3" y1="9.5" x2="21" y2="9.5" />
      <line x1="8" y1="2.5" x2="8" y2="6.5" />
      <line x1="16" y1="2.5" x2="16" y2="6.5" />
      <circle cx="8" cy="14" r="1" fill="currentColor" />
      <circle cx="12" cy="14" r="1" fill="currentColor" />
      <circle cx="16" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}

export function ExploreCardIcon({
  name,
  className = "w-6 h-6",
  size = 24,
}: {
  name: "compass" | "network" | "robot" | "bulb" | "folder" | "scale" | "cap" | "calendar";
  className?: string;
  size?: number;
}) {
  switch (name) {
    case "compass":
      return <CompassIcon className={className} size={size} />;
    case "network":
      return <NetworkIcon className={className} size={size} />;
    case "robot":
      return <RobotIcon className={className} size={size} />;
    case "bulb":
      return <BulbIcon className={className} size={size} />;
    case "folder":
      return <FolderIcon className={className} size={size} />;
    case "scale":
      return <ScaleIcon className={className} size={size} />;
    case "cap":
      return <CapIcon className={className} size={size} />;
    case "calendar":
      return <CalendarIcon className={className} size={size} />;
    default:
      return null;
  }
}
