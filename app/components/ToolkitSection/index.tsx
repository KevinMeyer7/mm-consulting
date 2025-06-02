"use client";

import { groupedToolkit } from "@/app/content/toolkit";
import ToolkitColumn from "../ToolkitColumn";
import { Badge } from "../ui/badge";

export default function ToolkitSection() {
  const allTools = Object.values(groupedToolkit).flat();

  return (
    <section id="toolkit" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ─────────────────────────── Left: heading & copy ─────────────────────────── */}
          <div className="text-center lg:text-left">
            <Badge className="mx-auto lg:mx-0">Toolkit</Badge>
            <h2 className="text-[32px] lg:text-6xl tracking-[-0.03em] font-bold text-brand-text mt-6">
              20 Enterprise‑Ready AI Tools
            </h2>
            <p className="text-brand-textDim mt-4 text-lg max-w-xl mx-auto lg:mx-0">
              Stop drowning in weekly “tool of the week” lists. We distilled the
              noise to the 20 platforms already generating ROI inside mid‑market
              teams. Every cohort gets sandbox accounts, playbooks, and live
              drills—so your workforce can wield AI with confidence in 60 days.
            </p>
          </div>

          {/* ─────────────────────────── Right: infinite scroll list ─────────────────────────── */}
          <div className="lg:mt-0 mt-8">
            <div className="grid md:grid-cols-2 gap-4 lg:h-[800px] h-[400px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              {/* First column scrolls upward */}
              <ToolkitColumn
                tools={allTools.map(({ desc, ...rest }) => ({
                  ...rest,
                  description: desc,
                }))}
              />
              {/* Second column scrolls downward */}
              <ToolkitColumn
                tools={[...allTools].reverse().map(({ desc, ...rest }) => ({
                  ...rest,
                  description: desc,
                }))}
                className="hidden md:flex"
                reverse
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
