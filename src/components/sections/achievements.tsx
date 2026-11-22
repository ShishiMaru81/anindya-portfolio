"use client";

import { Trophy } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  AnimatedStagger,
  AnimatedStaggerChild,
} from "@/components/ui/animated-section";
import { achievements } from "@/data/portfolio";

export function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-card/50">
      <div className="container-custom">
        <SectionHeading
          label="Achievements"
          title="Activities & credentials"
        />

        <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <AnimatedStaggerChild key={index}>
              <div className="p-6 rounded-xl bg-background border border-border card-hover h-full flex flex-col">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-primary mb-3">
                  {item.issuer}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            </AnimatedStaggerChild>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
