"use client";

import { ExternalLinkIcon } from "@/assets/svgs/index";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";
import { TypewriterEffect } from "@/components/acerteinity/TypeWriterEffect";
import { motion } from "framer-motion";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const words = [{ text: "Yash", className: "text-tertiary font-bold tracking-wider" }];

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4 md:px-6 flex justify-center">
      <nav className="w-full max-w-5xl glass-panel rounded-full px-4 py-2.5 md:px-6 flex items-center justify-between shadow-xl shadow-black/25">
        <div
          className="flex cursor-pointer select-none items-center gap-1 text-xl md:text-2xl font-bold font-mono"
          onClick={() => router.push("/")}
        >
          <span className="text-tertiary">&lt;</span>
          <TypewriterEffect words={words} cursorClassName="bg-accent-cyan" />
          <span className="text-accent-cyan">/&gt;</span>
        </div>

        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-1 md:gap-4">
            {links.map((l, i) => {
              const isActive = pathname === l.href;
              return (
                <li key={i} className="relative">
                  <Link
                    href={l.href}
                    className={cn(
                      "flex cursor-pointer gap-2 px-3 py-1.5 text-sm md:text-base font-medium rounded-full transition-all duration-300",
                      isActive
                        ? "text-tertiary"
                        : "text-secondary hover:text-white"
                    )}
                  >
                    {l.label}
                  </Link>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-tertiary/10 rounded-full -z-10 border border-tertiary/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="hidden sm:block h-5 w-[1px] bg-white/10" />

          <Link
            href="mailto:sahuyash1103+portfolio@gmail.com"
            className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-tertiary to-accent-cyan px-4 py-1.5 text-sm font-semibold text-black hover:opacity-90 hover:shadow-lg hover:shadow-tertiary/20 transition-all duration-300"
          >
            Email
            <ExternalLinkIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
