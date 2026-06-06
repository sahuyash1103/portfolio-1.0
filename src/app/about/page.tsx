"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const RESUME_LINK =
  "https://1drv.ms/b/c/f3d27b6a9ffbbe24/IQAhknf4skVzRJDy8OLU3xNuAYbJMr0P2XDlT4dkdRJFYWs";

const timeline = [
  {
    year: "2018",
    title: "Started Coding Journey",
    desc: "Fell in love with programming through web fundamentals — HTML, CSS, JavaScript.",
    icon: "🚀",
    color: "#6366f1",
  },
  {
    year: "2020",
    title: "Dived into React & Backend",
    desc: "Built first full-stack projects using React.js and Node.js/Express with MongoDB.",
    icon: "⚡",
    color: "#fbbf24",
  },
  {
    year: "2022",
    title: "Expanded to Mobile & AI",
    desc: "Shipped Flutter apps and began exploring computer vision with Python and OpenCV.",
    icon: "🤖",
    color: "#38bdf8",
  },
  {
    year: "2023",
    title: "Enterprise-Grade Systems",
    desc: "Built real-time architectures with NestJS, WebSockets, and microservice patterns.",
    icon: "🏗️",
    color: "#34d399",
  },
  {
    year: "2024",
    title: "Going Deeper",
    desc: "Diving into AI pipelines, distributed systems, and performance engineering.",
    icon: "🔭",
    color: "#f472b6",
  },
];

const skillGroups = [
  {
    name: "Frontend",
    color: "#6366f1",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "Flutter", level: 78 },
      { name: "CSS / Tailwind", level: 88 },
    ],
  },
  {
    name: "Backend",
    color: "#fbbf24",
    skills: [
      { name: "NestJS", level: 88 },
      { name: "Django / DRF", level: 80 },
      { name: "REST & WebSockets", level: 90 },
      { name: "Express.js", level: 82 },
    ],
  },
  {
    name: "Data & AI",
    color: "#38bdf8",
    skills: [
      { name: "Python", level: 84 },
      { name: "OpenCV / YOLO", level: 72 },
      { name: "NumPy / Pandas", level: 70 },
    ],
  },
  {
    name: "DevOps / Infra",
    color: "#34d399",
    skills: [
      { name: "Docker", level: 76 },
      { name: "Firebase", level: 83 },
      { name: "MongoDB / PostgreSQL", level: 80 },
    ],
  },
];

const values = [
  { emoji: "🎯", title: "Precision", desc: "I obsess over details — clean APIs, optimized queries, pixel-perfect UIs." },
  { emoji: "🔍", title: "Curiosity", desc: "Every bug is a mystery and every new technology is an adventure." },
  { emoji: "🤝", title: "Collaboration", desc: "The best products are built by teams. I thrive in collaborative environments." },
  { emoji: "⚡", title: "Speed", desc: "Shipping fast while maintaining quality is a craft I'm always sharpening." },
];

export default function About() {
  return (
    <div className="w-full">
      {/* ── Hero ── */}
      <section className="w-full pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              <span className="section-eyebrow">
                <span className="text-amber-400">{"// "}</span>
                01 — About Me
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Engineer by craft,<br />
                <span className="text-gradient-primary">Creator by nature</span>
              </h1>
              <div className="flex flex-col gap-4 text-white/50 text-base leading-relaxed">
                <p>
                  I'm Yash Sahu, a Full Stack Developer based in India with a passion
                  for building things that scale. My journey started in 2018 when I first
                  discovered the power of code to solve real-world problems.
                </p>
                <p>
                  Today, I specialize in crafting robust web applications using React,
                  Next.js, and NestJS on the frontend and backend respectively. I also
                  build mobile apps with Flutter and experiment with computer vision
                  systems in Python.
                </p>
                <p>
                  I believe that great software is the intersection of elegant architecture
                  and delightful user experience — and I chase that intersection every day.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-2">
                <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 8l-3-3m3 3l3-3M4 20h16" />
                  </svg>
                  Download Resume
                </a>
                <Link href="/contact" className="btn-outline">
                  Let's Talk
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Profile card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Card */}
                <div className="glass-bright rounded-3xl p-6 w-72 sm:w-80 flex flex-col items-center gap-5 relative overflow-hidden">
                  {/* Top gradient bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-amber-400 to-sky-400" />

                  {/* Avatar */}
                  <div className="relative w-28 h-28 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                    <Image
                      src="/profile-pic.jpeg"
                      alt="Yash Sahu"
                      fill
                      sizes="112px"
                      style={{ objectFit: "cover" }}
                      className="select-none"
                    />
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h2 className="font-display text-xl font-bold text-white">Yash Sahu</h2>
                    <p className="text-sm text-indigo-300/70 font-mono-custom mt-0.5">Full Stack Developer</p>
                  </div>

                  <div className="w-full h-px bg-white/6" />

                  {/* Details */}
                  <div className="w-full flex flex-col gap-3">
                    {[
                      { icon: "📍", label: "Location", value: "India" },
                      { icon: "🎓", label: "Focus", value: "Web & Mobile" },
                      { icon: "💼", label: "Status", value: "Open to Work" },
                      { icon: "⏱️", label: "Experience", value: "6+ Years" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-xs text-white/30 font-mono-custom">
                          <span>{item.icon}</span>
                          {item.label}
                        </span>
                        <span className="text-xs font-medium text-white/70">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative floating elements */}
                <div
                  className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl glass border border-white/10 animate-float"
                >
                  💡
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl flex items-center justify-center text-xl glass border border-white/10 animate-float-delayed"
                >
                  ⚙️
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Skills with Progress Bars ── */}
      <section className="w-full py-20 md:py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 mb-14"
          >
            <span className="section-eyebrow">
              <span className="text-amber-400">{"// "}</span>
              02 — Proficiency
            </span>
            <h2 className="font-display text-4xl font-extrabold text-white">
              Skills & Expertise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 }}
                className="glass-bright rounded-2xl p-6 flex flex-col gap-5"
              >
                <h3
                  className="font-display font-bold text-lg"
                  style={{ color: group.color }}
                >
                  {group.name}
                </h3>
                <div className="flex flex-col gap-4">
                  {group.skills.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.1 + si * 0.08 }}
                      className="flex flex-col gap-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white/70">{skill.name}</span>
                        <span className="font-mono-custom text-xs" style={{ color: group.color }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: gi * 0.1 + si * 0.08, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full relative overflow-hidden"
                          style={{ background: `linear-gradient(90deg, ${group.color}99, ${group.color})` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="w-full py-20 md:py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 mb-14"
          >
            <span className="section-eyebrow">
              <span className="text-amber-400">{"// "}</span>
              03 — Journey
            </span>
            <h2 className="font-display text-4xl font-extrabold text-white">
              My Timeline
            </h2>
          </motion.div>

          <div className="relative flex flex-col gap-0">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/30 via-amber-400/20 to-transparent" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="relative flex gap-6 pb-10 last:pb-0 group"
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 mt-1">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1 pt-1">
                  <span className="font-mono-custom text-xs font-bold" style={{ color: item.color }}>
                    {item.year}
                  </span>
                  <h3 className="font-display font-bold text-white text-lg">{item.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed max-w-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="w-full py-20 md:py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 mb-14"
          >
            <span className="section-eyebrow">
              <span className="text-amber-400">{"// "}</span>
              04 — Philosophy
            </span>
            <h2 className="font-display text-4xl font-extrabold text-white">
              What drives me
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-bright rounded-2xl p-6 flex flex-col gap-3 cursor-default"
              >
                <span className="text-3xl">{val.emoji}</span>
                <h3 className="font-display font-bold text-white text-lg">{val.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
