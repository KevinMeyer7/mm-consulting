"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

export interface Tool {
  tag: string;
  name: string;
  icon: string;
  desc: string;
}

interface IntegrationColumnProps {
  tools: Tool[];
  direction?: "up" | "down";
}

export default function IntegrationColumn({
  tools,
  direction = "up",
}: IntegrationColumnProps) {
  // duplicate list for infinite loop
  const items = [...tools, ...tools];
  const cardHeight = 200; // px incl. gap
  const travel = cardHeight * tools.length;

  return (
    <div className="h-[600px] overflow-hidden relative">
      <motion.div
        className="flex flex-col gap-4"
        animate={{ y: direction === "up" ? [0, -travel] : [-travel, 0] }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
      >
        {items.map((tool, i) => (
          <Card
            key={`${tool.name}-${i}`}
            className="bg-brand-bg border border-brand-border/10 rounded-3xl p-6 shadow-sm hover:shadow-md transition will-change-transform"
          >
            {/* ─── Header row ─────────────────────────────────────────────── */}
            <div className="flex items-center justify-between mb-4">
              <Badge
                variant="outline"
                className="border-brand-border/20 text-brand-textDim text-xs"
              >
                {tool.tag}
              </Badge>

              {/* logo frame */}
              {/*               <div className="w-16 h-16 rounded-xl bg-brand-textDim/10 flex items-center justify-center">
                <Image
                  src={`/${tool.icon}`}
                  alt={`${tool.name} icon`}
                  width={48}
                  height={48}
                  className="object-contain w-12 h-12 p-[3px]"
                />
              </div> */}
            </div>

            {/* ─── Copy ──────────────────────────────────────────────────── */}
            <h3 className="font-bold text-brand-text mb-1 leading-snug">
              {tool.name}
            </h3>
            <p className="text-sm text-brand-textDim leading-relaxed">
              {tool.desc}
            </p>
          </Card>
        ))}
      </motion.div>
    </div>
  );
}
