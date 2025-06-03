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
    document.getElementById("lead")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsDownloading(true);

    const filename = "Meyer-Mathur-AI-Training-Teaser.pdf";

    try {
      // 1️⃣  Tell the server to fire the Resend email
      await fetch("/api/send-download-notification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename, visitorEmail: email }),
      });
    } catch (err) {
      console.error("[Download] Notification failed:", err);
      // Optionally: show a toast/snackbar here
    } finally {
      // 2️⃣  Start the file download regardless of email-send outcome
      const link = document.createElement("a");
      link.href = "/teaser-deck.pdf";
      link.download = filename;
      link.click();

      setIsDownloading(false);
      setEmail("");
    }
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
            days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToLead}>Book a Discovery Call</Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Download Teaser Deck</Button>
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

                  <Button type="submit" disabled={isDownloading}>
                    {isDownloading ? "Preparing Download…" : "Download PDF"}
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
