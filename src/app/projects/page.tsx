"use client";

import {
  GithubIcon,
  ExternalLinkIcon,
} from "@/assets/svgs/index";
import { IProjectLinks, projects } from "./data";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 flex flex-col min-h-screen"
    >
      {/* Page Header */}
      <div className="flex flex-col mb-10 md:mb-12">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-cyan mb-2">
          My Work
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Featured Projects
        </h1>
        <p className="text-secondary max-w-xl text-sm sm:text-base leading-relaxed">
          A showcase of application development demonstrating full-stack engineering, 
          intuitive UI designs, and integrations across web and mobile platforms.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="glass-panel glass-panel-hover rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 relative group overflow-hidden"
          >
            {/* Ambient Card glow on hover */}
            <div className="absolute -inset-px bg-gradient-to-tr from-tertiary/20 to-accent-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none -z-10" />

            <div>
              {/* Card Title & Dates */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-tertiary transition-colors duration-300">
                  {project.name}
                </h3>
                <span className="text-[11px] font-mono font-semibold tracking-wider px-2.5 py-1 rounded bg-white/5 text-secondary border border-white/5 uppercase w-fit">
                  {project.from} {project.to ? `- ${project.to}` : ""}
                </span>
              </div>

              <div className="h-[1px] w-full bg-white/10 mb-5" />

              {/* Description */}
              <div className="flex flex-col gap-3 text-secondary text-sm leading-relaxed mb-6">
                {project.description.map((d, index) => (
                  <p key={index}>{d}</p>
                ))}
              </div>
            </div>

            <div>
              {/* Tech Stack */}
              <div className="flex flex-col gap-2.5 mb-4">
                <span className="text-xs font-semibold text-white/95 uppercase tracking-wider">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full border border-tertiary/20 bg-tertiary/5 text-tertiary hover:bg-tertiary/10 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Additional Technologies */}
              {project.additional && project.additional.length > 0 && (
                <div className="flex flex-col gap-2.5 mb-6">
                  <span className="text-xs font-semibold text-white/95 uppercase tracking-wider">
                    Additional
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.additional.map((add) => (
                      <span
                        key={add}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan hover:bg-accent-cyan/10 transition-colors duration-200"
                      >
                        {add}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Links */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">
                  Links
                </span>
                <div className="flex items-center gap-3">
                  {project.links.git && (
                    <Link
                      href={project.links.git}
                      target="_blank"
                      className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 hover:border-tertiary hover:text-tertiary bg-white/5 transition-all duration-300"
                      title="Github Repository"
                    >
                      <GithubIcon className="w-4.5 h-4.5" />
                    </Link>
                  )}
                  {project.links.live && (
                    <Link
                      href={project.links.live}
                      target="_blank"
                      className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 hover:border-accent-cyan hover:text-accent-cyan bg-white/5 transition-all duration-300"
                      title="Live Demo"
                    >
                      <ExternalLinkIcon className="w-4.5 h-4.5" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
