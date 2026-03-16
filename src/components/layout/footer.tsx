import { Github, Linkedin, Facebook, Heart } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

const socialLinks = [
  {
    icon: Github,
    href: siteConfig.social.github,
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: siteConfig.social.linkedin,
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    href: siteConfig.social.facebook,
    label: "Facebook",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container-custom py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>&copy; {new Date().getFullYear()}</span>
            <span>{siteConfig.name}.</span>
            <span className="hidden sm:inline">Built with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 hidden sm:inline" />
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
