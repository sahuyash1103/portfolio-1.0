"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const RESUME_LINK =
  "https://1drv.ms/b/c/f3d27b6a9ffbbe24/IQAhknf4skVzRJDy8OLU3xNuAYbJMr0P2XDlT4dkdRJFYWs";

/* ─── Typewriter hook ─── */
function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= current.length) {
      timer = setTimeout(() => {
        setDisplay(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, speed);
    } else if (!deleting && charIndex > current.length) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex >= 0) {
      timer = setTimeout(() => {
        setDisplay(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
    }
    return () => clearTimeout(timer);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return display;
}

/* ─── Tech orbit items ─── */
const orbitItems = [
  { label: "React", color: "#61DAFB", angle: 0 },
  { label: "Next.js", color: "#E0E0E0", angle: 60 },
  { label: "NestJS", color: "#E0234E", angle: 120 },
  { label: "TypeScript", color: "#3178C6", angle: 180 },
  { label: "Flutter", color: "#54C5F8", angle: 240 },
  { label: "Python", color: "#FFD43B", angle: 300 },
];

/* ─── Stats ─── */
const stats = [
  { value: "2018", label: "Coding Since", accent: "#6366f1" },
  { value: "300+", label: "Git Commits", accent: "#fbbf24" },
  { value: "15+", label: "Projects Built", accent: "#38bdf8" },
  { value: "8+", label: "Tech Stacks", accent: "#34d399" },
];

/* ─── Skills bento grid ─── */
const skills = [
  { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Flutter", "Tailwind CSS"], color: "#6366f1" },
  { category: "Backend", items: ["NestJS", "Django", "Express.js", "REST API", "WebSockets"], color: "#fbbf24" },
  { category: "Data & AI", items: ["Python", "OpenCV", "TensorFlow", "YOLO", "NumPy"], color: "#38bdf8" },
  { category: "Infrastructure", items: ["Docker", "Firebase", "MongoDB", "PostgreSQL", "Redis"], color: "#34d399" },
];

/* ─── 3D Tilt Card ─── */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-50, 50], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-50, 50], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Floating Orbit Badge ─── */
function OrbitBadge({ label, color, angle, radius = 140 }: { label: string; color: string; angle: number; radius?: number }) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: angle / 600 + 0.5, duration: 0.4, type: "spring" }}
      whileHover={{ scale: 1.15 }}
      className="absolute flex items-center justify-center"
      style={{ left: `calc(50% + ${x}px - 28px)`, top: `calc(50% + ${y}px - 14px)` }}
    >
      <span
        className="px-2 py-0.5 rounded-full text-[10px] font-mono-custom font-bold whitespace-nowrap shadow-lg"
        style={{ background: `${color}18`, border: `1px solid ${color}40`, color }}
      >
        {label}
      </span>
    </motion.div>
  );
}

/* ═══════════════════════════════════
   MAIN PAGE
═══════════════════════════════════ */
export default function Home() {
  const roles = ["Full Stack Developer", "React Engineer", "Backend Architect", "Problem Solver"];
  const currentRole = useTypewriter(roles, 75, 2200);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="w-full">
      {/* ╔══════════════════════════════╗
          ║        HERO SECTION          ║
          ╚══════════════════════════════╝ */}
      <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
        >
          {/* ── Left column ── */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="section-eyebrow">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <h1 className="font-display font-extrabold leading-[1.1] tracking-tight">
                <span className="block text-5xl sm:text-6xl lg:text-7xl text-white">
                  Yash
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl text-gradient-primary">
                  Sahu
                </span>
              </h1>
              <div className="flex items-center gap-2 h-8 mt-2">
                <span className="font-mono-custom text-base sm:text-lg text-indigo-300/70">
                  {`>`}
                </span>
                <span className="font-mono-custom text-base sm:text-lg text-white/70">
                  {currentRole}
                </span>
                <span className="font-mono-custom text-indigo-400 animate-cursor-blink text-xl leading-none mt-0.5">
                  |
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-white/50 text-base leading-relaxed max-w-lg"
            >
              I build scalable web applications, real-time architectures, and
              computer vision systems. Deeply curious engineer who believes
              every complex challenge has an elegant, calculative solution.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 8l-3-3m3 3l3-3M4 20h16" />
                </svg>
                Download Resume
              </a>
              <Link href="/projects" className="btn-outline group">
                View Projects
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="text-xs font-mono-custom text-white/20 uppercase tracking-widest">Find me</span>
              <div className="flex-1 h-px bg-white/8" />
              <a
                href="https://github.com/sahuyash1103"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 bg-white/4 text-white/50 hover:text-white hover:border-indigo-400/40 hover:bg-indigo-400/8 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/yash-sahu-58b645202/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 bg-white/4 text-white/50 hover:text-white hover:border-sky-400/40 hover:bg-sky-400/8 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:sahuyash1103+portfolio@gmail.com"
                className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 bg-white/4 text-white/50 hover:text-white hover:border-amber-400/40 hover:bg-amber-400/8 transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* ── Right column: profile + orbits ── */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center relative"
          >
            <TiltCard className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Orbit ring */}
              <div className="absolute inset-0 rounded-full border border-white/[0.04] animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-indigo-500/10 animate-spin-reverse" />

              {/* Ambient glow */}
              <div
                className="absolute inset-0 rounded-full animate-pulse-glow"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.18) 0%, transparent 70%)" }}
              />

              {/* Avatar */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-sky-400/10 z-10" />
                <Image
                  src="/profile-pic.jpeg"
                  alt="Yash Sahu — Full Stack Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 320px"
                  style={{ objectFit: "cover" }}
                  className="select-none"
                />
              </div>

              {/* Orbit badges */}
              {orbitItems.map((item) => (
                <OrbitBadge key={item.label} {...item} radius={mounted ? 155 : 155} />
              ))}

              {/* Corner accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                className="absolute bottom-8 right-4 glass-bright rounded-2xl px-3 py-2 text-xs font-mono-custom border border-emerald-400/20"
              >
                <span className="text-emerald-400">✓</span>
                <span className="text-white/60 ml-1.5">Open to work</span>
              </motion.div>
            </TiltCard>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono-custom text-[10px] text-white/20 uppercase tracking-widest">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-4 h-6 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
          >
            <div className="w-0.5 h-1.5 bg-white/30 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ╔══════════════════════════════╗
          ║        STATS SECTION         ║
          ╚══════════════════════════════╝ */}
      <section className="w-full py-10 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 flex flex-col gap-1 group cursor-default"
              >
                <span
                  className="font-display text-3xl md:text-4xl font-extrabold tracking-tight"
                  style={{ color: stat.accent }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-white/40 uppercase tracking-widest font-mono-custom">
                  {stat.label}
                </span>
                <div className="h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500 mt-1"
                  style={{ background: stat.accent }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════╗
          ║        SKILLS SECTION        ║
          ╚══════════════════════════════╝ */}
      <section id="skills" className="w-full py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 mb-14"
          >
            <span className="section-eyebrow">
              <span className="text-amber-400">{"// "}</span>
              02 — Skills
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              What I work with
            </h2>
            <p className="text-white/40 max-w-lg text-base">
              A curated set of technologies I've mastered across the full stack.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-bright rounded-2xl p-6 flex flex-col gap-4 cursor-default group relative overflow-hidden"
              >
                {/* Top gradient accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)` }}
                />

                {/* Icon dot */}
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-mono-custom font-bold"
                  style={{ background: `${skill.color}18`, color: skill.color, border: `1px solid ${skill.color}30` }}
                >
                  {skill.category.slice(0, 2)}
                </div>

                <h3 className="font-display font-bold text-white text-lg">{skill.category}</h3>

                <div className="flex flex-col gap-2">
                  {skill.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: skill.color }}
                      />
                      <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════╗
          ║      FEATURED PROJECT CTA    ║
          ╚══════════════════════════════╝ */}
      <section className="w-full pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden p-[1px]"
          >
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-3xl" style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.5), rgba(251,191,36,0.3), rgba(56,189,248,0.4))"
            }} />

            <div className="relative rounded-3xl glass-bright p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left */}
              <div className="flex flex-col gap-4 max-w-lg">
                <span className="section-eyebrow">
                  <span className="text-amber-400">{"// "}</span>
                  Featured Work
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Built real products,<br />
                  <span className="text-gradient-primary">not just tutorials.</span>
                </h2>
                <p className="text-white/45 text-base leading-relaxed">
                  From real-time chat systems to e-commerce platforms and
                  computer vision apps — take a deep dive into what I've shipped.
                </p>
              </div>

              {/* Right */}
              <div className="flex flex-col items-center gap-4 flex-shrink-0">
                {/* Mini project preview cards */}
                <div className="flex gap-3 mb-2">
                  {["HORIZEN HUB", "E-Commerce", "Flutter Chat"].map((p, i) => (
                    <div
                      key={p}
                      className="glass rounded-xl px-3 py-2 text-xs font-mono-custom text-white/50 border border-white/8"
                      style={{ transform: `rotate(${(i - 1) * 4}deg)` }}
                    >
                      {p}
                    </div>
                  ))}
                </div>
                <Link href="/projects" className="btn-primary text-base px-8 py-3.5 group">
                  Explore Projects
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
