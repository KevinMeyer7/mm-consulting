/* app/privacy/page.tsx
   Meyer & Mathur Consulting – Privacy Policy
   Last updated: 01 June 2025
*/
import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { CookieBannerEU } from "../components/CookieBannerEU";
export const metadata: Metadata = {
  title: "Privacy Policy | Meyer & Mathur Consulting",
  description:
    "How Meyer & Mathur Consulting Ltd collects, uses and protects your data in line with UK & EU GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 min-h-screen bg-brand-bg">
      <Nav />

      {/* MAIN CONTENT */}
      <section className="max-w-3xl mx-auto px-6 py-16 space-y-10">
        {/* H1 */}
        <h1 className="text-4xl font-bold tracking-[-0.04em] text-brand-text">
          Privacy Policy
        </h1>
        <p className="text-brand-textDim leading-relaxed">
          This notice explains how Meyer&nbsp;&amp;&nbsp;Mathur Consulting&nbsp;
          <strong>Ltd</strong> (“MMC”, “we”, “us”) collects, uses and protects
          your personal data when you visit <strong>mm-consulting.ai</strong> or
          interact with our lead-generation forms. It complies with the UK GDPR
          and, where applicable, the EU GDPR.
        </p>

        {/* 1 · Controller */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-text">
            1&nbsp;&nbsp;Who is responsible for your data?
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="font-medium text-brand-text">Controller</div>
            <div className="sm:col-span-2 text-brand-textDim">
              Meyer &amp; Mathur Consulting Ltd
            </div>

            <div className="font-medium text-brand-text">
              Registered address
            </div>
            <div className="sm:col-span-2 text-brand-textDim">
              Registered address: 6 Fairlawns, 89 Wimbledon Parkside, London
              SW19 5LR
            </div>

            <div className="font-medium text-brand-text">Contact</div>
            <div className="sm:col-span-2">
              <a
                href="mailto:arhant@mm-consulting.ai"
                className="text-brand-textDim hover:text-brand-text transition"
              >
                arhant@mm-consulting.ai
              </a>
            </div>
          </div>
        </section>

        {/* 2 · Data we collect */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-text">
            2&nbsp;&nbsp;What data do we collect & why?
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-brand-border/10">
              <thead className="bg-brand-bgAlt text-brand-text">
                <tr>
                  <th className="p-3 text-left font-semibold">Category</th>
                  <th className="p-3 text-left font-semibold">Examples</th>
                  <th className="p-3 text-left font-semibold">Purpose</th>
                  <th className="p-3 text-left font-semibold">
                    Legal&nbsp;basis&nbsp;(UK/EU&nbsp;GDPR&nbsp;Art.)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border/10">
                <tr className="text-brand-textDim">
                  <td className="p-3">Lead data</td>
                  <td className="p-3">
                    Name, work email, company, size, urgency, budget, notes
                  </td>
                  <td className="p-3">
                    Respond to enquiries, schedule discovery calls
                  </td>
                  <td className="p-3">
                    Art.&nbsp;6&nbsp;(1)(b) pre-contract &nbsp;/&nbsp; (f)
                    legitimate interest
                  </td>
                </tr>
                <tr className="text-brand-textDim">
                  <td className="p-3">Admin auth</td>
                  <td className="p-3">Founder email + hashed password</td>
                  <td className="p-3">Secure access to admin dashboard</td>
                  <td className="p-3">Art.&nbsp;6&nbsp;(1)(f)</td>
                </tr>
                <tr className="text-brand-textDim">
                  <td className="p-3">Technical logs</td>
                  <td className="p-3">
                    Truncated IP, browser, device, cookie preference
                  </td>
                  <td className="p-3">
                    Site security, cookie banner, aggregate analytics
                  </td>
                  <td className="p-3">Art.&nbsp;6&nbsp;(1)(f)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3 · Processors */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-text">
            3&nbsp;&nbsp;Who processes your data?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-brand-textDim">
            <li>
              <strong>Supabase&nbsp;Inc.</strong> – cloud hosting, Postgres,
              Storage, Auth (EU-West, Frankfurt)
            </li>
            <li>
              <strong>Calendly&nbsp;LLC</strong> – meeting scheduling (EU-West,
              Belgium)
            </li>
          </ul>
          <p className="text-brand-textDim">
            We never sell your data and do <strong>not</strong> share it with
            advertisers.
          </p>
        </section>

        {/* 4 · Retention */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-text">
            4&nbsp;&nbsp;How long do we keep data?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-brand-textDim">
            <li>Lead records: 24&nbsp;months after last interaction</li>
            <li>Email logs: 12&nbsp;months</li>
            <li>Security logs: 7&nbsp;days</li>
          </ul>
        </section>

        {/* 5 · Rights */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-text">
            5&nbsp;&nbsp;Your rights
          </h2>
          <p className="text-brand-textDim">
            You may access, correct, delete, restrict or port your personal
            data, and object to certain processing. Email{" "}
            <a
              href="mailto:arhant@mm-consulting.ai"
              className="underline hover:text-brand-text"
            >
              arhant@mm-consulting.ai
            </a>{" "}
             — we will respond within 30&nbsp;days. UK residents may also lodge
            a complaint with the{" "}
            <a
              href="https://ico.org.uk/"
              target="_blank"
              className="underline hover:text-brand-text"
            >
              Information Commissioner’s Office
            </a>
            ; EU residents with their local DPA.
          </p>
        </section>

        {/* 6 · Cookies, 7 · Security, 8 · Transfers, 9 · Changes */}
        {/* (Replicate the previous pattern or add as needed) */}
      </section>

      <Footer />
      <CookieBannerEU />
    </div>
  );
}
