"use client";

import React from "react";
import { site } from "@/content/site";
import { FooterSocialLinks } from "./FooterSocialLinks";

export function FooterContactDetails() {
  return (
    <div className="flex flex-col space-y-6">
      {/* Partnership Enquiries */}
      <div className="flex flex-col items-start">
        <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#6B7280] mb-2.5">
          PARTNERSHIP ENQUIRIES
        </span>
        <a
          href={`mailto:${site.contact.email}`}
          className="group inline-flex items-center gap-2.5 text-sm font-medium text-[#111111] transition-colors duration-200 hover:text-[#FF6A00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6A00]"
          aria-label={`Send partnership enquiry to ${site.contact.email}`}
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[#FF6A00]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </span>
          <span className="relative">
            {site.contact.email}
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-[1px] w-full bg-[#FF6A00] origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
            />
          </span>
        </a>
      </div>

      {/* Headquarters */}
      <div className="flex flex-col items-start">
        <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#6B7280] mb-2.5">
          HEADQUARTERS
        </span>
        <div className="inline-flex items-center gap-2.5 text-sm font-medium text-[#111111]">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[#FF6A00]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </span>
          <span>{site.contact.headquarters}</span>
        </div>
      </div>

      {/* Fine Horizontal Divider Line */}
      <div className="pt-2">
        <span className="block h-px w-10 bg-[#E5E7EB] mb-5" aria-hidden="true" />
        {/* Social Icons Strip */}
        <FooterSocialLinks />
      </div>
    </div>
  );
}
