/* Meyer & Mathur Consulting – Terms of Use
   Last updated: 01 June 2025 */
import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { CookieBannerEU } from "../components/CookieBannerEU";

export const metadata: Metadata = {
  title: "Terms of Use | MM CONSULTING AI LTD.",
  description:
    "The rules for using mm-consulting.ai, including intellectual-property rights, acceptable use, disclaimers and governing law.",
};

export default function TermsPage() {
  return (
    <div className="py-16 min-h-screen bg-brand-bg">
      <Nav />

      <main className="py-16 max-w-3xl mx-auto px-6 space-y-10">
        <h1 className="text-4xl font-bold tracking-[-0.04em] text-brand-text">
          Website Terms of Use
        </h1>

        {/* 1. Introduction */}
        <section className="space-y-4 text-brand-textDim">
          <p>
            By accessing <strong>mm-consulting.ai</strong> (the “Site”) you
            agree to these Terms of Use (“Terms”). If you do not accept them,
            please do not use the Site.
          </p>
        </section>

        {/* 2. Intellectual Property */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-brand-text">
            1&nbsp;&nbsp;Intellectual property
          </h2>
          <p className="text-brand-textDim">
            All content on the Site—including text, graphics, logos, and
            software code—is owned by Meyer&nbsp;&amp;&nbsp;Mathur
            Consulting&nbsp;Ltd or its licensors and is protected by UK and
            international copyright laws. You may view, download and print
            materials for your own business evaluation but must not republish,
            sell, or exploit them without our written consent.
          </p>
        </section>

        {/* 3. Acceptable Use */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-brand-text">
            2&nbsp;&nbsp;Acceptable use
          </h2>
          <ul className="list-disc list-inside text-brand-textDim space-y-1">
            <li>No unlawful, fraudulent or harmful activity.</li>
            <li>
              Do not attempt to gain unauthorised access to our systems or
              disrupt service.
            </li>
            <li>No automated scraping of leads or email addresses.</li>
          </ul>
        </section>

        {/* 4. Disclaimer */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-brand-text">
            3&nbsp;&nbsp;Disclaimer
          </h2>
          <p className="text-brand-textDim">
            The Site is provided “as is” without warranties of any kind. We make
            no guarantees that it will be error-free or available at all times.
          </p>
        </section>

        {/* 5. Limitation of liability */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-brand-text">
            4&nbsp;&nbsp;Limitation of liability
          </h2>
          <p className="text-brand-textDim">
            To the maximum extent permitted by law, Meyer&nbsp;&amp;&nbsp;Mathur
            Consulting&nbsp;Ltd will not be liable for any indirect, incidental
            or consequential damages arising from your use of the Site.
          </p>
        </section>

        {/* 6. Links */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-brand-text">
            5&nbsp;&nbsp;External links
          </h2>
          <p className="text-brand-textDim">
            Links to third-party websites are provided for convenience only and
            do not constitute endorsement. We are not responsible for their
            content.
          </p>
        </section>

        {/* 7. Governing law */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-brand-text">
            6&nbsp;&nbsp;Governing law
          </h2>
          <p className="text-brand-textDim">
            These Terms are governed by the laws of England and Wales. The
            courts of London shall have exclusive jurisdiction.
          </p>
        </section>

        {/* 8. Changes */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-brand-text">
            7&nbsp;&nbsp;Changes
          </h2>
          <p className="text-brand-textDim">
            We may update these Terms at any time; the revised version will be
            posted on this page with a new “Last updated” date.
          </p>
        </section>

        {/* 9. Contact */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-brand-text">
            8&nbsp;&nbsp;Contact
          </h2>
          <p className="text-brand-textDim">
            Questions? Email{" "}
            <a
              href="mailto:arhant@mm-consulting.ai"
              className="underline hover:text-brand-text"
            >
              arhant@mm-consulting.ai
            </a>
            .
          </p>
        </section>
      </main>

      <Footer />
      <CookieBannerEU />
    </div>
  );
}
