"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/95 backdrop-blur-sm border-b border-brand-border/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Company Name */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-brand-text">
              Meyer & Mathur Consulting
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("founders")}
              className="text-brand-textDim hover:text-brand-text transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("toolkit")}
              className="text-brand-textDim hover:text-brand-text transition-colors"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection("outcomes")}
              className="text-brand-textDim hover:text-brand-text transition-colors"
            >
              Results
            </button>
            <Button onClick={() => scrollToSection("lead")}>
              Book Discovery Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-text"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-brand-border/10">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("founders")}
                className="text-brand-textDim hover:text-brand-text transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("toolkit")}
                className="text-brand-textDim hover:text-brand-text transition-colors text-left"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection("outcomes")}
                className="text-brand-textDim hover:text-brand-text transition-colors text-left"
              >
                Results
              </button>
              <Button
                onClick={() => scrollToSection("lead")}
                className="bg-brand-text text-white rounded-lg px-6 py-3 hover:bg-transparent hover:text-brand-text hover:ring-1 hover:ring-brand-border transition w-full"
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
