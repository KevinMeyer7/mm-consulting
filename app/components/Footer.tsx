"use client";

import Link from "next/link";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="border-t border-brand-border/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-brand-text mb-4">
              Meyer & Mathur Consulting
            </h3>
            <p className="text-brand-textDim leading-relaxed">
              Transforming mid-market companies through enterprise-grade AI
              training and implementation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-brand-text mb-4">Resources</h4>
            <div className="space-y-2">
              <a
                href="/privacy"
                className="block text-brand-textDim hover:text-brand-text transition-colors"
              >
                Privacy Policy
              </a>
              <Link
                href="/terms"
                className="block text-brand-textDim hover:text-brand-text transition-colors"
              >
                Terms of Use
              </Link>
              <button
                className="block text-brand-textDim hover:text-brand-text transition-colors text-left"
                onClick={() => {
                  /* Cookie settings modal */
                }}
              >
                Cookie Settings
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-brand-text mb-4">Contact</h4>
            <div className="space-y-2 text-brand-textDim">
              <p>arhant@mm-consulting.ai</p>
              <p>+44 7726 909100</p>
              <p>London, UK</p>
            </div>

            {/* Social links */}
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://x.com/consulting46877"
                aria-label="X"
                className="text-brand-textDim hover:text-brand-text transition-colors"
              >
                <FaXTwitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-brand-textDim hover:text-brand-text transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-border/10 text-center text-brand-textDim">
          <p>
            &copy; 2025 Meyer & Mathur Consulting Ltd · 6 Fairlawns, 89
            Wimbledon Parkside, London SW19 5LR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
