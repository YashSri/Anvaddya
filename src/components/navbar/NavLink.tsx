import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
  className = "",
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`group relative inline-flex items-center py-2 text-[0.92rem] font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:ring-offset-2 rounded-sm ${
        isActive
          ? "text-[#FF6A00] font-semibold"
          : "text-[#111111] hover:text-[#FF6A00]"
      } ${className}`}
    >
      <span>{children}</span>

      {/* Animated thin orange underline from left to right */}
      <span
        className={`absolute bottom-0 left-0 h-[2px] w-full bg-[#FF6A00] transition-transform duration-200 ease-out origin-left ${
          isActive
            ? "scale-x-100"
            : "scale-x-0 group-hover:scale-x-100"
        }`}
        aria-hidden="true"
      />
    </Link>
  );
}
