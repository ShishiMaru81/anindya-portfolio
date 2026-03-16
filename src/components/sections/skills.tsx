"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import {
  AnimatedStagger,
  AnimatedStaggerChild,
} from "@/components/ui/animated-section";
import { skillCategories } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-card/50">
      <div className="container-custom">
        <SectionHeading
          label="Skills"
          title="Tools & Technologies"
          description="The technologies I use to bring ideas to life."
        />

        <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <AnimatedStaggerChild key={category.title}>
              <div className="p-6 rounded-xl bg-background border border-border card-hover h-full">
                <h3 className="text-base font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedStaggerChild>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
