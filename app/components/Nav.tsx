"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Scroll on the homepage; otherwise go to /#id first
  const handleNav = (id: string) => {
    setIsOpen(false);

    if (pathname === "/") {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-brand-bg/95 backdrop-blur-sm border-b border-brand-border/10">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="text-xl font-bold">
            Meyer&nbsp;&amp;&nbsp;Mathur Consulting
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNav("founders")}
              className="text-brand-textDim hover:text-brand-text transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNav("toolkit")}
              className="text-brand-textDim hover:text-brand-text transition-colors"
            >
              Solutions
            </button>
            <button
              onClick={() => handleNav("outcomes")}
              className="text-brand-textDim hover:text-brand-text transition-colors"
            >
              Results
            </button>
            <Button onClick={() => handleNav("lead")}>
              Book Discovery Call
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-text"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-brand-border/10">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => handleNav("founders")}
                className="text-left text-brand-textDim hover:text-brand-text transition-colors"
              >
                About
              </button>
              <button
                onClick={() => handleNav("toolkit")}
                className="text-left text-brand-textDim hover:text-brand-text transition-colors"
              >
                Solutions
              </button>
              <button
                onClick={() => handleNav("outcomes")}
                className="text-left text-brand-textDim hover:text-brand-text transition-colors"
              >
                Results
              </button>
              <Button
                onClick={() => handleNav("lead")}
                className="w-full bg-brand-text text-white rounded-lg px-6 py-3
                                 hover:bg-transparent hover:text-brand-text hover:ring-1
                                 hover:ring-brand-border transition"
              >
                Book Discovery Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
