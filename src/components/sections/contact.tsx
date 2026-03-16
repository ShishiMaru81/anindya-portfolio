"use client";

import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Facebook,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  AnimatedSection,
  AnimatedStagger,
  AnimatedStaggerChild,
} from "@/components/ui/animated-section";
import { siteConfig } from "@/data/portfolio";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    copyable: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "ShishiMaru81",
    href: siteConfig.social.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Anindya Paul",
    href: siteConfig.social.linkedin,
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Anindya Paul",
    href: siteConfig.social.facebook,
  },
  {
    icon: BookOpen,
    label: "Medium",
    value: "@paulanindya2001",
    href: siteConfig.social.medium,
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          description="I'm open to opportunities in ML engineering, AI research, and data science. Let's connect."
        />

        <div className="max-w-2xl mx-auto">
          {/* Location */}
          <AnimatedSection className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
              <MapPin className="w-4 h-4" />
              {siteConfig.location}
            </div>
          </AnimatedSection>

          {/* Contact links */}
          <AnimatedStagger className="space-y-3 mb-10">
            {contactLinks.map((link) => (
              <AnimatedStaggerChild key={link.label}>
                <div className="flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {link.label}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {link.value}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {link.copyable && (
                      <button
                        onClick={copyEmail}
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        aria-label="Copy email"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    )}
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      aria-label={`Open ${link.label}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </AnimatedStaggerChild>
            ))}
          </AnimatedStagger>

          {/* CTA */}
          <AnimatedSection delay={0.3} className="text-center">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-opacity text-base"
            >
              <Mail className="w-5 h-5" />
              Send Me an Email
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
