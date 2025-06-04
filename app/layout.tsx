// app/layout.tsx
import "./globals.css";
import Providers from "./providers";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MM Consulting – AI Transformation for Mid-Market Teams",
  description:
    "Live courses, hands-on seminars and on-demand modules that turn mid-market workforces into AI power-users in 60 days.",
  alternates: { canonical: "https://mm-consulting.ai" },
  openGraph: {
    type: "website",
    url: "https://mm-consulting.ai",
    title: "MM Consulting – AI Transformation",
    description:
      "Transforming mid-market companies through enterprise-grade AI training and implementation.",
    images: [{ url: "https://mm-consulting.ai/logo.jpeg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* ---------- JSON-LD structured data ---------- */
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MM Consulting AI",
    alternateName: "MM Consulting AI Ltd",
    url: "https://mm-consulting.ai",
    logo: "https://mm-consulting.ai/logo.jpeg",
    description:
      "Transforming mid-market companies through enterprise-grade AI training and implementation.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 Fairlawns, 89 Wimbledon Parkside",
      addressLocality: "London",
      postalCode: "SW19 5LR",
      addressCountry: "GB",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "arhant@mm-consulting.ai",
        telephone: "+44 7726 909100",
        contactType: "sales",
        areaServed: ["GB", "US", "EU"],
        availableLanguage: ["en"],
      },
    ],
    founder: [
      {
        "@type": "Person",
        name: "Kevin Meyer",
        jobTitle: "Co-Founder & Technology Director",
        alumniOf: "Google",
        sameAs: [
          // add real profile URLs when you have them
          "https://www.linkedin.com/in/kevinstefanmeyer",
        ],
      },
      {
        "@type": "Person",
        name: "Arhant Mathur",
        jobTitle: "Co-Founder & Managing Partner",
        alumniOf: ["BlackRock", "Schroders"],
        email: "arhant@mm-consulting.ai",
        sameAs: ["https://www.linkedin.com/in/arhantmathur"],
      },
    ],
    // include only if you have real data published somewhere public
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "87",
    },
  };

  return (
    <html lang="en">
      <body className="font-sans bg-brand-bg text-brand-text">
        <Providers>{children}</Providers>
        {/* inject structured data */}
        {/* 3  Example: defer any analytics / chat widget */}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-XXXX"
          strategy="lazyOnload"
        />{" "}
        {/* 4  Structured data for Google */}
        <Script
          id="jsonld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
