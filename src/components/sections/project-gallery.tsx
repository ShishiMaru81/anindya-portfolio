"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectVisual } from "@/components/ui/project-visual";
import { projects } from "@/data/projects";

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.filter((project) => project.featured);
  return (
    <section id="projects" className="section-padding bg-card/50">
      <div className="container-custom">
        <SectionHeading label="Selected work" title="Projects, from idea to implementation" description="Applied AI, computer vision, and backend work. Explore the problem, my contribution, and the evidence behind each project." />
        <div id="project-list" className="grid items-start gap-6 md:grid-cols-2">
          {displayed.map((project) => (
            <article key={project.id} aria-labelledby={`${project.id}-title`} className="overflow-hidden rounded-2xl border border-border bg-background">
              <ProjectVisual project={project} />
              <div className="p-5 sm:p-6">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-primary">{project.category}</p>
                <h3 id={`${project.id}-title`} className="text-xl font-semibold tracking-tight text-foreground">{project.title}</h3>
                <p className="mb-4 mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mb-4 flex flex-wrap items-center gap-2 text-xs"><span className="rounded-full border border-border px-2.5 py-1 text-muted-foreground">{project.collaboration}</span><span className="font-medium text-foreground">{project.role}</span></div>
                <div className="mb-5 flex flex-wrap gap-1.5">{project.techStack.map((tech) => <span key={tech} className="rounded-md bg-primary/10 px-2 py-1 text-[11px] font-medium text-primary">{tech}</span>)}</div>
                <details className="group border-t border-border pt-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-md py-1 text-sm font-medium text-foreground [&::-webkit-details-marker]:hidden">
                    <span><span className="group-open:hidden">Read case study</span><span className="hidden group-open:inline">Close case study</span><span className="sr-only">: {project.title}</span></span><ChevronDown className="h-4 w-4 flex-shrink-0 text-primary transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <dl className="space-y-4 py-5 text-sm">
                    {[["The problem", project.problem], [project.featured ? "My contribution" : "Project focus", project.contribution], ["Engineering challenge", project.challenge], ["What the project demonstrates", project.outcome]].map(([label, value]) => <div key={label}><dt className="mb-1 font-semibold text-foreground">{label}</dt><dd className="leading-relaxed text-muted-foreground">{value}</dd></div>)}
                  </dl>
                  <a href={project.evidence.url} target="_blank" rel="noopener noreferrer" className="mb-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline">{project.evidence.label}<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /><span className="sr-only"> for {project.title}</span></a>
                </details>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary" aria-label={`${project.title} GitHub repository`}><Github className="h-4 w-4" aria-hidden="true" />View source<ArrowUpRight className="h-3 w-3" aria-hidden="true" /></a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center"><button onClick={() => setShowAll(!showAll)} aria-expanded={showAll} aria-controls="project-list" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">{showAll ? <>Show featured projects<ChevronUp className="h-4 w-4" aria-hidden="true" /></> : <>Show all {projects.length} projects<ChevronDown className="h-4 w-4" aria-hidden="true" /></>}</button></div>
      </div>
    </section>
  );
}
