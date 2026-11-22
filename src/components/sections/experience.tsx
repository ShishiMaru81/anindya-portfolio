"use client";

import { Briefcase, ExternalLink, MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  AnimatedStagger,
  AnimatedStaggerChild,
} from "@/components/ui/animated-section";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Experience"
          title="Experience"
          description="Internships and hands-on work, most recent first."
        />

        <AnimatedStagger className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <AnimatedStaggerChild key={index}>
              <div className="relative p-6 rounded-xl bg-card border border-border card-hover">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="w-4 h-4 text-primary flex-shrink-0" />
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      {exp.companyUrl !== "#" ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium text-sm inline-flex items-center gap-1"
                        >
                          {exp.company}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-primary font-medium text-sm">
                          {exp.company}
                        </span>
                      )}
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedStaggerChild>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
