"use client";

import { Target, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  AnimatedSection,
  AnimatedStagger,
  AnimatedStaggerChild,
} from "@/components/ui/animated-section";
import { aboutData } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="About Me"
          title="Connecting models to useful software"
          description="The interests behind my projects and the work I want to do next."
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Summary */}
          <AnimatedSection className="lg:col-span-3 space-y-4">
            {aboutData.summary.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </AnimatedSection>

          {/* Highlights + Goal */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatedSection delay={0.15}>
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Core Focus Areas
                  </h3>
                </div>
                <AnimatedStagger className="space-y-2">
                  {aboutData.highlights.map((item) => (
                    <AnimatedStaggerChild key={item}>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </div>
                    </AnimatedStaggerChild>
                  ))}
                </AnimatedStagger>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    My Goal
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {aboutData.goal}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
