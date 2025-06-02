"use client";

import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { founders } from "../content/founders";

export function Founders() {
  return (
    <section id="founders" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[32px] tracking-[-0.03em] font-bold text-brand-text mb-4">
            Meet Your AI Transformation Partners
          </h2>
          <p className="text-base leading-relaxed text-brand-textDim max-w-2xl mx-auto">
            Plugged into Silicon Valley’s AI pulse and seasoned in Fortune 500
            rollouts, our founders live and breathe the latest enterprise AI
            tools—so while you’re still deciding, your competitors are already
            racing ahead.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <Card
              key={index}
              className="bg-brand-bg border border-brand-border/10 rounded-3xl shadow-sm hover:shadow-md transition p-8"
            >
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold text-brand-text mb-2">
                  {founder.name}
                </h3>

                <p className="text-brand-textDim mb-4 font-medium">
                  {founder.title}
                </p>

                <p className="text-brand-textDim leading-relaxed mb-6">
                  {founder.bio}
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {founder.expertise.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="border-brand-border/20 text-brand-textDim"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
