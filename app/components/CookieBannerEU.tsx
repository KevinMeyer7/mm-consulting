"use client";

import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";

export function CookieBannerEU() {
  const [showBanner, setShowBanner] = useState(false);
  const [isEU, setIsEU] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookies-accepted");
    if (hasAccepted) return;

    // Check if user is in EU/EEA region
    // In production, this would use CF-IPCountry header or ipdata.io
    // For demo, we'll show to all users
    setIsEU(true);
    setShowBanner(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true");
    setShowBanner(false);
  };

  if (!showBanner || !isEU) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-brand-border shadow-lg p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-brand-text">
          <p className="text-sm">
            We use cookies to improve your experience and analyze site usage.
            <a href="/privacy" className="underline hover:no-underline ml-1">
              Learn more in our Privacy Policy
            </a>
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => setShowBanner(false)}
            className="ring-1 ring-brand-border text-brand-text hover:bg-brand-text hover:text-white transition"
          >
            Decline
          </Button>
          <Button
            onClick={acceptCookies}
            className="bg-brand-text text-white hover:bg-brand-textDim transition"
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
}
