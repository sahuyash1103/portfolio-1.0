"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home", key: "home" },
  { href: "/about", label: "About", key: "about" },
  { href: "/projects", label: "Projects", key: "projects" },
  { href: "/contact", label: "Contact", key: "contact" },
];

function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500",
            scrolled
              ? "glass-bright shadow-2xl shadow-black/40"
              : "bg-transparent"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 select-none"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-500 to-sky-400 opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="relative font-mono-custom font-bold text-white text-sm">Y</span>
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white/90 group-hover:text-white transition-colors">
              Yash
              <span className="text-indigo-400">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const isActive = pathname === l.href;
              return (
                <li key={l.key} className="relative">
                  <Link
                    href={l.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 block",
                      isActive
                        ? "text-white"
                        : "text-white/50 hover:text-white/80"
                    )}
                  >
                    {l.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white/8 rounded-xl border border-white/10 -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://1drv.ms/b/c/f3d27b6a9ffbbe24/IQAhknf4skVzRJDy8OLU3xNuAYbJMr0P2XDlT4dkdRJFYWs"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex btn-primary text-xs px-4 py-2"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 8l-3-3m3 3l3-3M4 20h16" />
              </svg>
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
                className="w-4 h-[1.5px] bg-white/80 rounded-full block"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={{ opacity: mobileOpen ? 0 : 1 }}
                className="w-4 h-[1.5px] bg-white/80 rounded-full block"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
                className="w-4 h-[1.5px] bg-white/80 rounded-full block"
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
        </motion.nav>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden mt-2 glass-bright rounded-2xl p-4 flex flex-col gap-1 shadow-2xl shadow-black/50"
            >
              {links.map((l) => {
                const isActive = pathname === l.href;
                return (
                  <Link
                    key={l.key}
                    href={l.href}
                    className={cn(
                      "px-4 py-3 text-sm font-medium rounded-xl transition-all",
                      isActive
                        ? "bg-indigo-500/15 text-white border border-indigo-500/20"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <div className="h-px bg-white/5 my-1" />
              <a
                href="https://1drv.ms/b/c/f3d27b6a9ffbbe24/IQAhknf4skVzRJDy8OLU3xNuAYbJMr0P2XDlT4dkdRJFYWs"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 8l-3-3m3 3l3-3M4 20h16" />
                </svg>
                Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Nav;
