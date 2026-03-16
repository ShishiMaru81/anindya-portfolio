"use client";

import { AnimatedSection } from "./animated-section";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <AnimatedSection className="mb-14 text-center">
      <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
