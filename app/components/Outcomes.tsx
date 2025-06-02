"use client";

import { Card } from "@/app/components/ui/card";
import { outcomes } from "../content/outcomes";

export function Outcomes() {
  return (
    <section id="outcomes" className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[32px] tracking-[-0.03em] font-bold text-brand-textDim mb-4">
            Measurable Results
          </h2>
          <p className="text-base leading-relaxed text-brand-textDim max-w-2xl mx-auto">
            Our training programs deliver quantifiable improvements across key
            performance metrics that matter to your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome, index) => (
            <Card
              key={index}
              className="bg-brand-bg border border-brand-border/10 rounded-3xl shadow-sm hover:shadow-md transition p-8 text-center"
            >
              <div className="text-4xl font-bold text-brand-text mb-2">
                {outcome.stat}
              </div>
              <div className="text-lg font-semibold text-brand-textDim mb-3">
                {outcome.label}
              </div>
              <p className="text-sm text-brand-textDim leading-relaxed">
                {outcome.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
