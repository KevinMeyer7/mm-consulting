"use client";

import { motion } from "framer-motion";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

interface Tool {
  tag: string;
  name: string;
  icon: string;
  desc: string;
}

interface IntegrationColumnProps {
  tools: Tool[];
  direction?: "up" | "down";
}

export function IntegrationColumn({
  tools,
  direction = "up",
}: IntegrationColumnProps) {
  // Duplicate tools to create seamless scrolling
  const duplicatedTools = [...tools, ...tools];

  return (
    <div className="h-[600px] overflow-hidden relative">
      <motion.div
        className="flex flex-col gap-4"
        animate={{
          y:
            direction === "up"
              ? [0, -50 * tools.length]
              : [-50 * tools.length, 0],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedTools.map((tool, index) => (
          <Card
            key={`${tool.name}-${index}`}
            className="bg-brand-bg border border-brand-border/10 rounded-3xl shadow-sm hover:shadow-md transition p-6 min-h-[140px] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <Badge
                  variant="outline"
                  className="border-brand-border/20 text-brand-textDim text-xs"
                >
                  {tool.tag}
                </Badge>
                <div className="w-8 h-8 bg-brand-textDim/10 rounded-lg flex items-center justify-center">
                  {/* Placeholder for tool icon */}
                  <div className="w-4 h-4 bg-brand-textDim/30 rounded"></div>
                </div>
              </div>

              <h3 className="font-bold text-brand-text mb-2">{tool.name}</h3>

              <p className="text-sm text-brand-textDim leading-relaxed">
                {tool.desc}
              </p>
            </div>
          </Card>
        ))}
      </motion.div>
    </div>
  );
}
