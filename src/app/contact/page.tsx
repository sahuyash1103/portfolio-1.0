"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const emailAddress = "sahuyash1103+portfolio@gmail.com";

const socialLinks = [
  {
    name: "GitHub",
    handle: "@sahuyash1103",
    href: "https://github.com/sahuyash1103",
    color: "#e0e0e0",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "yash-sahu-58b645202",
    href: "https://www.linkedin.com/in/yash-sahu-58b645202/",
    color: "#0A66C2",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Email",
    handle: "sahuyash1103@gmail.com",
    href: `mailto:${emailAddress}`,
    color: "#fbbf24",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <div className="w-full">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4 mb-14"
        >
          <span className="section-eyebrow">
            <span className="text-amber-400">{"// "}</span>
            04 — Contact
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Let&apos;s build something<br />
            <span className="text-gradient-primary">incredible together.</span>
          </h1>
          <p className="text-white/40 max-w-lg text-base leading-relaxed">
            Have a project in mind, want to collaborate, or just want to say hello?
            I&apos;d love to hear from you — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Big Email CTA */}
            <div className="glass-bright rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-amber-400 to-sky-400" />
              <div className="flex flex-col gap-1">
                <span className="section-eyebrow text-xs opacity-70">Direct Line</span>
                <h3 className="font-display font-bold text-white text-lg">Email Me</h3>
              </div>
              <p className="font-mono-custom text-xs text-white/40 break-all leading-relaxed">
                {emailAddress}
              </p>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={handleCopy}
                  className="btn-outline text-xs px-4 py-2"
                >
                  {copied ? (
                    <><span className="text-emerald-400">✓</span> Copied!</>
                  ) : (
                    <><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>Copy</>
                  )}
                </button>
                <a
                  href={`mailto:${emailAddress}`}
                  className="btn-primary text-xs px-4 py-2"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open Mail App
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-bright rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
              <div className="flex flex-col gap-1 mb-2">
                <span className="section-eyebrow text-xs opacity-70">Find me online</span>
                <h3 className="font-display font-bold text-white text-lg">Social Profiles</h3>
              </div>
              <div className="flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-white/6 hover:border-white/15 bg-white/3 hover:bg-white/6 transition-all duration-300 group/link"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-white/40 group-hover/link:text-white/70 transition-colors">
                        {link.icon}
                      </span>
                      <span className="text-sm font-medium text-white/60 group-hover/link:text-white/80 transition-colors">
                        {link.name}
                      </span>
                    </span>
                    <span className="font-mono-custom text-xs text-white/20">
                      {link.handle.slice(0, 18)}{link.handle.length > 18 ? "..." : ""}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass rounded-2xl px-5 py-4 flex items-center gap-3 border border-emerald-400/15">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-white/70">Currently Available</span>
                <span className="font-mono-custom text-xs text-white/30">Response within 24 hours</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-bright rounded-2xl p-6 md:p-8 flex flex-col gap-5 relative overflow-hidden"
            >
              {/* Top gradient */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-indigo-400 to-sky-400" />

              <h3 className="font-display font-bold text-white text-xl">Send a Message</h3>

              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "name", label: "Your Name", placeholder: "John Doe", required: true, type: "text" },
                  { name: "email", label: "Email Address", placeholder: "john@example.com", required: true, type: "email" },
                ].map((field) => (
                  <div key={field.name} className="flex flex-col gap-1.5">
                    <label className="font-mono-custom text-xs text-white/30 uppercase tracking-widest">
                      {field.label} {field.required && <span className="text-indigo-400">*</span>}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      placeholder={field.placeholder}
                      className="rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-300"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: focusedField === field.name
                          ? "1px solid rgba(99,102,241,0.5)"
                          : "1px solid rgba(255,255,255,0.08)",
                        boxShadow: focusedField === field.name
                          ? "0 0 0 3px rgba(99,102,241,0.08)"
                          : "none",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono-custom text-xs text-white/30 uppercase tracking-widest">
                  Subject <span className="text-indigo-400">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="What's this about?"
                  className="rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: focusedField === "subject"
                      ? "1px solid rgba(99,102,241,0.5)"
                      : "1px solid rgba(255,255,255,0.08)",
                    boxShadow: focusedField === "subject"
                      ? "0 0 0 3px rgba(99,102,241,0.08)"
                      : "none",
                  }}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono-custom text-xs text-white/30 uppercase tracking-widest">
                  Message <span className="text-indigo-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell me about your project, idea, or just say hi..."
                  rows={5}
                  className="rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none resize-none transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: focusedField === "message"
                      ? "1px solid rgba(99,102,241,0.5)"
                      : "1px solid rgba(255,255,255,0.08)",
                    boxShadow: focusedField === "message"
                      ? "0 0 0 3px rgba(99,102,241,0.08)"
                      : "none",
                  }}
                />
              </div>

              {/* Submit */}
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <><span>✓</span> Message Sent!</>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {status === "error" && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-rose-400 font-medium"
                    >
                      ⚠ Please fill in all required fields.
                    </motion.span>
                  )}
                  {status === "success" && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-emerald-400 font-medium"
                    >
                      Thanks! I&apos;ll get back to you soon.
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}
