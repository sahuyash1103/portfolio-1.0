"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects, IProject } from "./data";

const filters = ["All", "React.js", "Flutter", "NestJS", "Python", "Firebase"];

function ProjectCard({ project, index }: { project: IProject; index: number }) {
  const [hovered, setHovered] = useState(false);

  const accentColors = [
    { border: "rgba(99,102,241,0.4)", glow: "rgba(99,102,241,0.1)", text: "#818cf8" },
    { border: "rgba(251,191,36,0.4)", glow: "rgba(251,191,36,0.08)", text: "#fbbf24" },
    { border: "rgba(56,189,248,0.4)", glow: "rgba(56,189,248,0.08)", text: "#38bdf8" },
    { border: "rgba(52,211,153,0.4)", glow: "rgba(52,211,153,0.08)", text: "#34d399" },
  ];
  const accent = accentColors[index % accentColors.length];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
      className="group relative glass-bright rounded-2xl overflow-hidden flex flex-col cursor-default"
      style={{
        border: hovered ? `1px solid ${accent.border}` : "1px solid rgba(255,255,255,0.06)",
        boxShadow: hovered ? `0 20px 60px ${accent.glow}` : "none",
        transition: "border 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Top Accent Bar */}
      <div
        className="h-1 w-full transition-all duration-500"
        style={{
          background: hovered
            ? `linear-gradient(90deg, ${accent.text}80, ${accent.text}, ${accent.text}80)`
            : "rgba(255,255,255,0.04)",
        }}
      />

      <div className="p-6 md:p-8 flex flex-col gap-5 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <h3
              className="font-display font-bold text-xl text-white transition-colors duration-300"
              style={{ color: hovered ? accent.text : "white" }}
            >
              {project.name}
            </h3>
            {(project.from || project.to) && (
              <span className="font-mono-custom text-xs text-white/30 tracking-widest uppercase">
                {project.from}{project.to ? ` — ${project.to}` : ""}
              </span>
            )}
          </div>

          {/* Link icons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.links.git && (
              <a
                href={project.links.git}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/40 hover:text-white hover:border-white/20 transition-all duration-200"
                title="GitHub Repository"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/40 hover:text-white hover:border-white/20 transition-all duration-200"
                title="Live Demo"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          {project.description.map((d, i) => (
            <p key={i} className="text-sm text-white/45 leading-relaxed">{d}</p>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex-1" />
        <div className="flex flex-col gap-3">
          {/* Primary tech */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono-custom px-2.5 py-1 rounded-lg transition-all duration-200"
                style={{
                  background: `${accent.text}12`,
                  border: `1px solid ${accent.text}25`,
                  color: accent.text,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Additional */}
          {project.additional && project.additional.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.additional.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono-custom px-2.5 py-1 rounded-lg bg-white/4 border border-white/8 text-white/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter(
        (p) =>
          p.techStack.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase())) ||
          (p.additional || []).some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  return (
    <div className="w-full">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col gap-10"
      >
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="section-eyebrow">
            <span className="text-amber-400">{"// "}</span>
            03 — Work
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Featured Projects
          </h1>
          <p className="text-white/45 text-base max-w-xl leading-relaxed">
            A curated selection of applications demonstrating full-stack engineering,
            intuitive UI/UX, and integrations across web and mobile platforms.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
              style={{
                background: activeFilter === filter ? "rgba(99,102,241,0.2)" : "rgba(255,255,255,0.04)",
                border: activeFilter === filter ? "1px solid rgba(99,102,241,0.4)" : "1px solid rgba(255,255,255,0.08)",
                color: activeFilter === filter ? "#818cf8" : "rgba(255,255,255,0.4)",
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-3 py-20 text-white/30"
          >
            <span className="text-4xl">🔍</span>
            <p className="font-mono-custom text-sm">No projects match this filter</p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center pt-8 border-t border-white/5"
        >
          <p className="text-white/30 text-sm text-center">
            More projects on my GitHub — including private client work
          </p>
          <a
            href="https://github.com/sahuyash1103"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm flex-shrink-0"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View GitHub Profile
          </a>
        </motion.div>
      </motion.main>
    </div>
  );
}
