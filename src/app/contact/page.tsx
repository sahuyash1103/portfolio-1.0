"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon, LinkedInIcon, ExternalLinkIcon } from "@/assets/svgs/index";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const emailAddress = "sahuyash1103+portfolio@gmail.com";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.subject || !formData.message) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
      return;
    }

    setFormStatus("submitting");
    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setFormStatus("success");
    setFormData({
      firstName: "",
      lastName: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setFormStatus("idle"), 4000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
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
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Let&apos;s Build Something
        </h1>
        <p className="text-secondary max-w-xl text-sm sm:text-base leading-relaxed">
          Have an idea, want to collaborate, or just want to say hi? 
          Drop me a line or reach out on my socials!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start w-full">
        {/* Left Column - Contact Info */}
        <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-6 w-full">
          {/* Email Card */}
          <div className="glass-panel rounded-2xl p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-tertiary/30 to-transparent" />
            <span className="text-xs font-semibold text-accent-cyan uppercase tracking-wider">
              Direct Contact
            </span>
            <h3 className="text-lg font-bold text-white">Email Address</h3>
            <p className="text-sm text-secondary break-all font-mono">
              {emailAddress}
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/10 hover:border-tertiary bg-white/5 text-xs font-semibold text-white transition-all duration-300"
              >
                {copied ? (
                  <span className="text-accent-green">✓ Copied!</span>
                ) : (
                  <span>Copy Address</span>
                )}
              </button>
              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-tertiary to-accent-cyan hover:opacity-90 text-xs font-semibold text-black transition-all duration-300"
              >
                Send Mail
                <ExternalLinkIcon className="w-3" />
              </a>
            </div>
          </div>

          {/* Socials Card */}
          <div className="glass-panel rounded-2xl p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />
            <span className="text-xs font-semibold text-tertiary uppercase tracking-wider">
              On the Web
            </span>
            <h3 className="text-lg font-bold text-white">Social Profiles</h3>
            <div className="flex flex-col gap-3 mt-1">
              <a
                href="https://github.com/sahuyash1103"
                target="_blank"
                className="flex items-center justify-between p-3 rounded-xl border border-white/5 hover:border-tertiary/30 hover:bg-tertiary/5 text-sm text-secondary hover:text-white transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  <GithubIcon className="w-5 h-5 text-tertiary" />
                  GitHub Profile
                </span>
                <span className="text-xs text-secondary/60">github.com/sahuyash1103</span>
              </a>
              <a
                href="https://www.linkedin.com/in/yash-sahu-58b645202/"
                target="_blank"
                className="flex items-center justify-between p-3 rounded-xl border border-white/5 hover:border-accent-cyan/30 hover:bg-accent-cyan/5 text-sm text-secondary hover:text-white transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  <LinkedInIcon className="w-5 h-5 text-accent-cyan" />
                  LinkedIn Profile
                </span>
                <span className="text-xs text-secondary/60">linkedin.com/in/yash-sahu...</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div variants={itemVariants} className="lg:col-span-7 w-full">
          <form
            className="glass-panel rounded-2xl p-6 md:p-8 flex flex-col gap-6 relative"
            onSubmit={onSubmit}
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-tertiary/50 via-violet-500/50 to-accent-cyan/50" />

            <h3 className="text-lg font-bold text-white mb-2">Send a Message</h3>

            {/* Row: First and Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-secondary uppercase tracking-wider">
                  First Name <span className="text-tertiary">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="e.g. John"
                  className="rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white text-sm outline-none focus:border-tertiary transition-all duration-300"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-secondary uppercase tracking-wider">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="e.g. Doe"
                  className="rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white text-sm outline-none focus:border-tertiary transition-all duration-300"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-secondary uppercase tracking-wider">
                Subject <span className="text-tertiary">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What is this regarding?"
                className="rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white text-sm outline-none focus:border-tertiary transition-all duration-300"
                required
              />
            </div>

            {/* Message Description */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-secondary uppercase tracking-wider">
                Message <span className="text-tertiary">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Type your message details here..."
                className="h-36 resize-none rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white text-sm outline-none focus:border-tertiary transition-all duration-300"
                required
              />
            </div>

            {/* Buttons and feedback */}
            <div className="flex items-center gap-4 mt-2">
              <button
                type="submit"
                disabled={formStatus === "submitting" || formStatus === "success"}
                className="w-fit rounded-full bg-gradient-to-r from-tertiary to-accent-cyan hover:opacity-90 disabled:opacity-60 px-8 py-3 text-sm font-bold text-black tracking-wide shadow-lg hover:shadow-tertiary/15 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {formStatus === "submitting" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : formStatus === "success" ? (
                  "Sent Successfully"
                ) : (
                  "Submit Message"
                )}
              </button>

              <AnimatePresence>
                {formStatus === "success" && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm font-semibold text-accent-green"
                  >
                    ✓ Thanks! I&apos;ll get back to you soon.
                  </motion.span>
                )}
                {formStatus === "error" && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm font-semibold text-accent-rose"
                  >
                    ⚠ Please fill out all required fields.
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.main>
  );
}
