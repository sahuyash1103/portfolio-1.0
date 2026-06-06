"use client";

import {
  DownloadIcon,
  GithubIcon,
  LinkedInIcon,
} from "@/assets/svgs/index";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const numbersData = [
  {
    number: "2018",
    text: "Coding Since",
  },
  {
    number: "300+",
    text: "Code Commits",
  },
  {
    number: "15+",
    text: "Personal Projects",
  },
  {
    number: "15+",
    text: "Technologies Used",
  },
];

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 flex flex-col justify-between gap-12"
    >
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left Intro Column */}
        <motion.section 
          variants={itemVariants}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-cyan mb-2">
            Full Stack Developer
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-2">
            Hello, I&apos;m
          </h1>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-tertiary via-violet-400 to-accent-cyan tracking-tight mb-6">
            Yash Sahu
          </h2>
          <p className="text-base text-secondary leading-relaxed text-left max-w-xl mb-8">
            I am a Full Stack Developer specializing in building scalable web applications, 
            real-time architectures, and computer vision systems. Deeply curious and analytical, 
            I enjoy designing robust backends in NestJS and Django, crafting modern interfaces 
            in Next.js and Flutter, and implementing AI-driven automation. I believe that every 
            complex engineering challenge has an elegant, calculative solution.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 w-full">
            <Link
              href="https://1drv.ms/b/c/f3d27b6a9ffbbe24/IQAhknf4skVzRJDy8OLU3xNuAYbJMr0P2XDlT4dkdRJFYWs"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-full bg-gradient-to-r from-tertiary to-accent-cyan p-[1.5px] hover:shadow-lg hover:shadow-tertiary/20 transition-all duration-300"
            >
              <span className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-950 text-white font-semibold text-sm group-hover:bg-transparent group-hover:text-black transition-all duration-300">
                Download Resume
                <DownloadIcon className="w-4 h-4 text-tertiary group-hover:text-black transition-colors" />
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/sahuyash1103"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:border-tertiary hover:text-tertiary transition-all duration-300 bg-white/5"
              >
                <GithubIcon className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/yash-sahu-58b645202/"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:border-tertiary hover:text-tertiary transition-all duration-300 bg-white/5"
              >
                <LinkedInIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Right Avatar Column */}
        <motion.section 
          variants={itemVariants}
          className="lg:col-span-5 flex flex-col items-center justify-center relative py-6"
        >
          {/* Decorative rotating outer ring */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-tertiary to-accent-cyan rounded-full filter blur-[50px] opacity-20 pointer-events-none animate-pulse-slow"></div>

            {/* Rotating colored border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-tertiary via-transparent to-accent-cyan opacity-40 animate-spin-slow"></div>

            {/* Inner avatar container */}
            <div className="absolute inset-[6px] rounded-full bg-slate-950 p-2 overflow-hidden flex items-center justify-center border border-white/5">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/profile-pic.jpeg"
                  alt="Yash Sahu"
                  fill
                  sizes="(max-width: 768px) 288px, 320px"
                  priority
                  style={{ objectFit: "cover" }}
                  className="rounded-full select-none"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Stats Section */}
      <motion.footer 
        variants={itemVariants}
        className="w-full mt-8 md:mt-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {numbersData.map((data, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-panel glass-panel-hover rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center text-center shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              {/* Top border glowing highlight */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-tertiary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <span className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-accent-cyan font-mono tracking-tight mb-2">
                {data.number}
              </span>
              <span className="text-xs md:text-sm text-secondary font-medium uppercase tracking-wider">
                {data.text}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.footer>
    </motion.div>
  );
}
