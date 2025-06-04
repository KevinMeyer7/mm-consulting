"use client";

import { groupedToolkit } from "@/app/content/toolkit";
import IntegrationColumn from "./IntegrationColumn";
import { Badge } from "../ui/badge";

export default function ToolkitSection() {
  const allTools = Object.values(groupedToolkit).flat();

  return (
    <section id="toolkit" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/*  ───────── Left copy ───────── */}
          <div className="text-center lg:text-left">
            <Badge className="mx-auto lg:mx-0">AI Toolkit</Badge>
            <h2 className="text-[32px] lg:text-6xl tracking-[-0.03em] font-bold text-brand-text mt-6">
              Curated by YC, Google &amp; BlackRock alumni
            </h2>
            <p className="text-brand-textDim mt-4 text-lg max-w-xl mx-auto lg:mx-0">
              We track 2&nbsp;000+ releases so you don’t have to. These{" "}
              <em>battle-tested</em> platforms—spanning projects, sales, comms,
              content and copilots—are already delivering ROI for teams of every
              size. Every course ships with sandbox accounts, tailored prompts
              and live drills.
            </p>
          </div>

          {/* ───────── Right slider ───────── */}
          <div className="lg:mt-0 mt-8 min-w-0">
            <div
              className="grid md:grid-cols-2 gap-4 lg:h-[800px] h-[400px]
              overflow-hidden min-w-0
              [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
            >
              <IntegrationColumn tools={allTools} direction="up" />
              <IntegrationColumn
                tools={[...allTools].reverse()}
                direction="down"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
