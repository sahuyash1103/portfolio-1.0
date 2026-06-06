import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Space Grotesk", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Space Mono", "monospace"],
        display: ["var(--font-display)", "Syne", "sans-serif"],
        "mono-custom": ["var(--font-mono)", "Space Mono", "monospace"],
      },
      colors: {
        primary: "rgb(4 4 12)",
        "primary-2": "rgb(14 14 30)",
        "primary-fg": "rgb(240 240 255)",
        secondary: "rgb(160 160 200)",
        tertiary: "rgb(99 102 241)",
        "accent-cyan": "rgb(56 189 248)",
        "accent-green": "rgb(52 211 153)",
        "accent-rose": "rgb(251 113 133)",
        "accent-amber": "rgb(251 191 36)",
        indigo: {
          300: "rgb(165 180 252)",
          400: "rgb(129 140 248)",
          500: "rgb(99 102 241)",
          600: "rgb(79 70 229)",
        },
        sky: {
          400: "rgb(56 189 248)",
        },
        amber: {
          400: "rgb(251 191 36)",
        },
        emerald: {
          400: "rgb(52 211 153)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "glow-indigo": "0 0 40px rgba(99,102,241,0.3), 0 0 80px rgba(99,102,241,0.1)",
        "glow-amber": "0 0 40px rgba(251,191,36,0.3), 0 0 80px rgba(251,191,36,0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
