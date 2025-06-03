/* app/cookies/page.tsx
   Meyer & Mathur Consulting – Cookie Info
   Last updated: 01 Jun 2025
*/
import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { CookieBannerEU } from "../components/CookieBannerEU";
import { Button } from "../components/ui/button";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Cookie Information | Meyer & Mathur Consulting",
  description: "See the single essential cookie we set and how it’s used.",
};

export default function CookieInfo() {
  return (
    <div className="py-16 min-h-screen bg-brand-bg">
      <Nav />

      <main className="max-w-3xl mx-auto px-6 py-16 space-y-10">
        <h1 className="text-4xl font-bold tracking-[-0.04em] text-brand-text">
          Cookie Information
        </h1>

        <p className="text-brand-textDim leading-relaxed">
          We keep things simple: our website sets <strong>one</strong> essential
          cookie to remember your form progress. We don’t run ads or third-party
          trackers.
        </p>

        {/* Cookie table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm mt-6 border border-brand-border/10">
            <thead className="bg-brand-bgAlt text-brand-text">
              <tr>
                <th className="p-3 text-left font-semibold">Cookie</th>
                <th className="p-3 text-left font-semibold">Purpose</th>
                <th className="p-3 text-left font-semibold">Duration</th>
                <th className="p-3 text-left font-semibold">Category</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border/10 text-brand-textDim">
              <tr>
                <td className="p-3">mm_session</td>
                <td className="p-3">
                  Keeps your place in the lead-capture form so you don’t lose
                  data if the page reloads.
                </td>
                <td className="p-3">1&nbsp;day</td>
                <td className="p-3">Essential</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-brand-text mt-10">
          Local storage item
        </h2>
        <p className="text-brand-textDim text-sm">
          We store a flag called <code>cookies-accepted</code> in your browser’s
          local&nbsp;storage to remember that you closed the banner. It contains
          only the value <code>&quot;true&quot;</code>.
        </p>

        {/* Close button just navigates home */}
        <Button asChild className="mt-8">
          <Link href="/">Back to Home</Link>
        </Button>
      </main>

      <Footer />
      <CookieBannerEU />
    </div>
  );
}
