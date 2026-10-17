"use client";

import React from "react";
import { site } from "@/content/site";
import { CurrentYear } from "@/components/CurrentYear";

export function FooterLegalStrip() {
  return (
    <div className="border-t border-[#E5E7EB] pt-8 pb-12">
      <div className="flex flex-col gap-4 text-xs text-[#6B7280] sm:flex-row sm:items-center sm:justify-between font-normal">
        <p>
          © <CurrentYear /> {site.legalName}. All rights reserved.
        </p>
        <p>
          {site.programme} is a programme by {site.company}.
        </p>
      </div>
    </div>
  );
}
