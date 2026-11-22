"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data/portfolio";

function useMousePosition() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [x, y]);

  return { x, y };
}

function FloatingParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgb(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, rgb(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 600px 600px at 50% 50%, transparent 0%, rgb(var(--background)) 70%)`,
        }}
      />
    </div>
  );
}

function LetterReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.04,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function OrbitingRing({ size, duration, strokeWidth, dashArray, delay = 0 }: {
  size: number; duration: number; strokeWidth: number; dashArray: string; delay?: number;
}) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - strokeWidth}
          fill="none"
          stroke="rgb(var(--primary))"
          strokeWidth={strokeWidth}
          strokeDasharray={dashArray}
          opacity={0.2}
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}

function StatusBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur-sm"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
      </span>
      <span className="text-xs font-medium text-muted-foreground">
        Open to opportunities
      </span>
    </motion.div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { x: mouseX, y: mouseY } = useMousePosition();
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layered background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <GridBackground />
        <FloatingParticles />

        {/* Gradient orbs */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-15"
          style={{ background: "rgb(var(--primary))" }}
          animate={{
            x: ["-10%", "5%", "-10%"],
            y: ["-10%", "10%", "-10%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
          style={{ background: "rgb(var(--accent))" }}
          animate={{
            x: ["10%", "-5%", "10%"],
            y: ["10%", "-10%", "10%"],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Mouse-tracking spotlight */}
        {mounted && (
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgb(var(--primary) / 0.06) 0%, transparent 70%)",
              x: springX,
              y: springY,
              translateX: "-50%",
              translateY: "-50%",
            }}
          />
        )}
      </div>

      <div className="container-custom pt-24 pb-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Status badge */}
            <StatusBadge />

            {/* Welcome line */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="text-sm font-semibold tracking-[0.2em] uppercase text-primary"
            >
              Welcome to my portfolio
            </motion.p>

            {/* Name with letter reveal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="block text-foreground"
              >
                Hi, I&apos;m
              </motion.span>
              <LetterReveal
                text="Anindya Paul"
                className="gradient-text block mt-1"
                delay={0.7}
              />
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed text-primary">
              {siteConfig.title}
            </p>

            {/* Description with line animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="relative"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
                className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-accent origin-top hidden lg:block"
              />
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 lg:pl-4 leading-relaxed">
                {siteConfig.description}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-medium overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">View Projects</span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground rounded-xl font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <Mail className="w-4 h-4 group-hover:text-primary transition-colors" />
                Contact Me
              </a>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground rounded-xl font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <Download className="w-4 h-4 group-hover:text-primary transition-colors group-hover:-translate-y-0.5 transition-transform" />
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.6 }}
              className="flex gap-2 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: siteConfig.social.github, label: "GitHub" },
                { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
              ].map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="w-11 h-11 flex items-center justify-center rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.1 + i * 0.1 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile image with orbiting rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Orbiting rings */}
              <OrbitingRing size={340} duration={25} strokeWidth={1} dashArray="8 12" />
              <OrbitingRing size={380} duration={35} strokeWidth={1} dashArray="4 16" delay={2} />
              <OrbitingRing size={420} duration={45} strokeWidth={0.5} dashArray="2 20" delay={5} />

              {/* Orbiting dots */}
              <motion.div
                className="absolute top-1/2 left-1/2"
                style={{ width: 340, height: 340, marginLeft: -170, marginTop: -170 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
              </motion.div>
              <motion.div
                className="absolute top-1/2 left-1/2"
                style={{ width: 380, height: 380, marginLeft: -190, marginTop: -190 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent shadow-lg shadow-accent/50" />
              </motion.div>

              {/* Glow behind image */}
              <motion.div
                className="absolute inset-[-20px] bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Image container */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden shadow-2xl"
                style={{
                  border: "2px solid rgb(var(--border))",
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src={siteConfig.profileImage}
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                />
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex justify-center mt-16 lg:mt-20"
        >
          <a
            href="#projects"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs tracking-[0.2em] uppercase font-medium">
              Explore my work
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
