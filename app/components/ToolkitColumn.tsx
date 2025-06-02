// ToolkitColumn.tsx
"use client";

import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export type ToolItem = {
  name: string;
  icon: string; // or string if you’re loading SVGs via URL
  description: string;
};

interface ToolkitColumnProps {
  tools: ToolItem[];
  className?: string;
  reverse?: boolean;
}

const ToolkitColumn: React.FC<ToolkitColumnProps> = ({
  tools,
  className,
  reverse = false,
}) => {
  return (
    <motion.div
      initial={{ y: reverse ? "-50%" : 0 }}
      animate={{ y: reverse ? 0 : "-50%" }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className={twMerge("flex flex-col gap-4 pb-4", className)}
    >
      {/* Render the entire list twice so it loops seamlessly */}
      {Array.from({ length: 2 }).map((_, copyIndex) => (
        <Fragment key={copyIndex}>
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
            >
              <div className="flex justify-center">
                <img
                  src={tool.icon}
                  alt={`${tool.name} icon`}
                  className="h-12 w-12"
                />
              </div>
              <h3 className="text-3xl text-center mt-6">{tool.name}</h3>
              <p className="text-center text-white/50 mt-2">
                {tool.description}
              </p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
};

export default ToolkitColumn;
