import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F8F5F0",
          light: "#F8F5F0",
        },
        offwhite: "#F5F3EF",
        slate: "#525564",
        taupe: {
          DEFAULT: "#A88F7C",
          light: "#B79B88",
        },
        gold: {
          DEFAULT: "#B08D57",
          light: "#C9A968",
          dark: "#9A7848",
        },
        dark: "#2C2E35",
        // Legacy support
        rose: {
          DEFAULT: "#A88F7C",
          light: "#B79B88",
          dark: "#9A7848",
        },
        gray: {
          DEFAULT: "#525564",
          dark: "#2C2E35",
        },
        brown: {
          DEFAULT: "#A88F7C",
          light: "#B79B88",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
      },
      boxShadow: {
        card: "0 2px 16px rgba(168, 143, 124, 0.08)",
        "card-hover": "0 8px 32px rgba(168, 143, 124, 0.12)",
        soft: "0 1px 8px rgba(0, 0, 0, 0.04)",
        premium: "0 4px 24px rgba(168, 143, 124, 0.1)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      letterSpacing: {
        brand: "0.02em",
      },
    },
  },
  plugins: [],
};

export default config;
