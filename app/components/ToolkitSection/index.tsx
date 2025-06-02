// ToolkitSection.tsx
"use client";

import { groupedToolkit } from "@/app/content/toolkit";
import ToolkitColumn from "../ToolkitColumn";
import { Badge } from "../ui/badge";

export default function ToolkitSection() {
  // Flatten all groups into a single array of tools
  const allTools = Object.values(groupedToolkit).flat();

  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          {/* Left side: Heading + description */}
          <div>
            <Badge>Toolkit</Badge>
            <h2 className="text-6xl font-medium mt-6">
              16 Enterprise-Grade AI Tools
            </h2>
            <p className="text-white/50 mt-4 text-lg max-w-xl">
              Mid-market teams are drowning in a tidal wave of AI tools—our live
              courses, hands-on seminars, and on-demand modules (always updated
              with the newest breakthroughs) get your workforce battle-ready in
              60 days. Trusted by Google, BlackRock, and YC-backed firms, we
              ensure you won’t be the one left behind.
            </p>
          </div>

          {/* Right side: Two‐column, infinite‐scroll list of tools */}
          <div>
            <div className="grid md:grid-cols-2 gap-4 lg:h-[800px] h-[400px] lg:mt-0 mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              {/* First column scrolls upward, second scrolls downward */}
              <ToolkitColumn
                tools={allTools.map(({ desc, ...rest }) => ({
                  ...rest,
                  description: desc,
                }))}
              />
              <ToolkitColumn
                tools={[...allTools]
                  .reverse()
                  .map(({ desc, ...rest }) => ({ ...rest, description: desc }))}
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
