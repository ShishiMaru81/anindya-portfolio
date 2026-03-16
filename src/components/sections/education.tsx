"use client";

import { GraduationCap, BookOpen, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  AnimatedStagger,
  AnimatedStaggerChild,
} from "@/components/ui/animated-section";
import { education } from "@/data/portfolio";

const icons = [GraduationCap, BookOpen, Award];

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Education"
          title="Academic Background"
          description="The academic foundation behind my work."
        />

        <AnimatedStagger className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => {
            const Icon = icons[index] || GraduationCap;
            return (
              <AnimatedStaggerChild key={index}>
                <div className="relative p-6 rounded-xl bg-card border border-border card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                        <div>
                          <h3 className="text-base font-semibold text-foreground">
                            {edu.degree}
                          </h3>
                          <p className="text-sm text-primary font-medium">
                            {edu.institution}
                          </p>
                        </div>
                        <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full whitespace-nowrap self-start">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {edu.location}
                      </p>
                      <p className="text-sm font-medium text-foreground mt-1">
                        {edu.grade}
                      </p>
                      {"thesis" in edu && edu.thesis && (
                        <div className="mt-3 p-3 rounded-lg bg-muted/50 border border-border">
                          <p className="text-xs font-medium text-muted-foreground mb-1">
                            Thesis
                          </p>
                          <p className="text-sm text-foreground italic">
                            &quot;{edu.thesis}&quot;
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedStaggerChild>
            );
          })}
        </AnimatedStagger>
      </div>
    </section>
  );
}
