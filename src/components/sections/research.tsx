"use client";

import {
  FlaskConical,
  ExternalLink,
  FileText,
  Github,
  Calendar,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  AnimatedStagger,
  AnimatedStaggerChild,
} from "@/components/ui/animated-section";
import { research } from "@/data/portfolio";

export function Research() {
  return (
    <section id="research" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Research"
          title="Publications"
          description="Academic research exploring the intersection of AI and real-world impact."
        />

        <AnimatedStagger className="max-w-3xl mx-auto space-y-6">
          {research.map((paper, index) => (
            <AnimatedStaggerChild key={index}>
              <div className="relative p-6 rounded-xl bg-card border border-border card-hover">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FlaskConical className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                        {paper.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground leading-snug">
                      {paper.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {paper.authors} &middot; {paper.affiliation}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-muted-foreground flex-shrink-0">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {paper.date}
                    </span>
                  </div>
                </div>

                {/* Abstract */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {paper.description}
                </p>

                {/* Key findings */}
                <ul className="space-y-2 mb-4">
                  {paper.findings.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[11px] font-medium rounded-md bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border text-sm">
                  {"doiUrl" in paper && (
                    <a
                      href={paper.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      DOI: {paper.doi}
                    </a>
                  )}
                  {"arxivUrl" in paper && (
                    <a
                      href={paper.arxivUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      arXiv preprint
                    </a>
                  )}
                  {"pdfUrl" in paper && (
                    <a
                      href={paper.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      IEEE PDF
                    </a>
                  )}
                  {"githubUrl" in paper && (
                    <a
                      href={paper.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </AnimatedStaggerChild>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
