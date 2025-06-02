"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Hero() {
  const [email, setEmail] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);

  const scrollToLead = () => {
    const element = document.getElementById("lead");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsDownloading(true);
    // In real implementation, this would track the download and trigger email
    setTimeout(() => {
      // Simulate download
      const link = document.createElement("a");
      link.href = "/teaser-deck.pdf";
      link.download = "Meyer-Mathur-AI-Training-Teaser.pdf";
      link.click();
      setIsDownloading(false);
      setEmail("");
    }, 1000);
  };

  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[40px] md:text-[56px] tracking-[-0.04em] font-bold text-brand-text leading-tight mb-6">
            Transform Your Team Into
            <br />
            <span className="text-brand-textDim">AI Power Users</span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-brand-textDim mb-8 max-w-2xl mx-auto">
            Mid-market teams are drowning in a tidal wave of AI tools—our live
            courses, hands-on seminars, and on-demand modules (always updated
            with the newest breakthroughs) get your workforce battle-ready in 60
            days. Trusted by Google, BlackRock, and YC-backed firms, we ensure
            you won’t be the one left behind.{" "}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToLead}
              className="bg-brand-text text-white rounded-lg px-6 py-3 hover:bg-transparent hover:text-brand-text hover:ring-1 hover:ring-brand-border transition"
            >
              Book a Discovery Call
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="ring-1 ring-brand-border text-brand-text rounded-lg px-6 py-3 hover:bg-brand-text hover:text-white transition"
                >
                  Download Teaser Deck
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-brand-text">
                    Download Our AI Training Overview
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleDownload} className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="text-brand-textDim">
                      Work Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isDownloading}
                    className="w-full bg-brand-text text-white hover:bg-brand-textDim transition"
                  >
                    {isDownloading ? "Preparing Download..." : "Download PDF"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
