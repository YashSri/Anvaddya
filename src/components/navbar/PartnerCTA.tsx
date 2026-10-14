import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cta } from "@/content/site";

export function PartnerCTA({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href={cta.primary.href}
      className={`group inline-flex items-center justify-center gap-1.5 rounded-[10px] bg-[#FF6A00] font-sans font-medium text-white transition-all duration-200 hover:bg-[#E65F00] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:ring-offset-2 ${
        compact
          ? "px-3.5 py-2 text-xs"
          : "px-5 py-2.5 text-[0.88rem]"
      } ${className}`}
      aria-label="Partner With Us — School Partnership"
    >
      <span className="tracking-wide">Partner With Us</span>
      <ArrowUpRight
        className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
        aria-hidden="true"
      />
    </Link>
  );
}
