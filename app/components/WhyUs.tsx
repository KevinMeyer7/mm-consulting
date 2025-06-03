"use client";

import { Card } from "@/app/components/ui/card";

export function WhyUs() {
  const benefits = [
    {
      title: "Battle-Tested Methodology",
      description:
        "Our frameworks have been refined across 100+ implementations, ensuring proven results for your organisation.",
    },
    {
      title: "45% Average ROI",
      description:
        "Teams see measurable productivity gains within the first month, with full ROI typically achieved in 90 days.",
    },
    {
      title: "Mid-Market Specialists",
      description:
        "Purpose-built for companies with 50-2000 employees who need enterprise results without enterprise complexity.",
    },
    {
      title: "White-Glove Delivery",
      description:
        "From initial assessment to full rollout, we provide hands-on support every step of the transformation journey.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[32px] tracking-[-0.03em] font-bold text-brand-text mb-4">
            Why Choose MM
          </h2>
          <p className="text-base leading-relaxed text-brand-textDim max-w-2xl mx-auto">
            We&apos;ve distilled the best practices from Fortune 500 AI
            implementations into a scalable methodology designed specifically
            for mid-market companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-brand-bg border border-brand-border/10 rounded-3xl shadow-sm hover:shadow-md transition p-6"
            >
              <h3 className="text-lg font-bold text-brand-text mb-3">
                {benefit.title}
              </h3>
              <p className="text-brand-textDim leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
