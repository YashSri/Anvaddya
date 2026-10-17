"use client";

import React from "react";
import Link from "next/link";
import { type NavLink } from "@/content/site";

interface FooterLinkColumnProps {
  title: string;
  links: NavLink[];
  hasOrangeMarker?: boolean;
}

export function FooterLinkColumn({
  title,
  links,
  hasOrangeMarker = false,
}: FooterLinkColumnProps) {
  return (
    <nav aria-label={title} className="flex flex-col">
      {/* Column Header with Optional Orange Marker */}
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111]">
          {title}
        </h3>
        {hasOrangeMarker && (
          <span className="h-[2px] w-6 bg-[#FF6A00] inline-block" aria-hidden="true" />
        )}
      </div>

      {/* Column Links List with Hover-Reveal Underline */}
      <ul className="space-y-3.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group relative inline-flex items-center py-0.5 text-sm font-normal text-[#4B5563] transition-colors duration-200 hover:text-[#FF6A00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6A00] rounded-sm"
            >
              <span>{link.label}</span>
              {/* Thin Orange Underline Reveal on Hover */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[1.5px] w-full bg-[#FF6A00] origin-left scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
