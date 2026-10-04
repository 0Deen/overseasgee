import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: {
            DEFAULT: "#4B1E8C",
            deep: "#3A1568",
            light: "#6A2FB5",
          },
          orange: {
            DEFAULT: "#F5A623",
            light: "#FBC55A",
          },
        },
        // Warm neutral palette used by the GulfShowcase "Herniur" layout
        cream: "#F6F1EA",
        sand: "#EFE6D8",
        ink: "#241A12",
        "warm-slate": "#6B6058",
        coffee: {
          light: "#8A6A4F",
          DEFAULT: "#5C4130",
          deep: "#2B1B10",
        },
        amber: {
          DEFAULT: "#D9A441",
          deep: "#C08F2E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        label: ["var(--font-sans)", "sans-serif"],
        body: ["var(--font-sans)", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(75, 30, 140, 0.15)",
        "glass-lg": "0 20px 60px -10px rgba(75, 30, 140, 0.35)",
        lift: "0 20px 45px -12px rgba(43, 27, 16, 0.45)",
        soft: "0 10px 30px -8px rgba(43, 27, 16, 0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;