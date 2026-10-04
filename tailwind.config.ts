import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rock: {
         DEFAULT: "#0D0D0F",
         deep: "#08080A", // tambahan
         soft: "#17171A",
         line: "#26262A",
        },
        crimson: {
          DEFAULT: "#D21F2E",
          light: "#F0384A",
        },
        royal: {
          DEFAULT: "#2E5AA8",
          light: "#4C7CD1",
        },
        silver: "#EDEDED",
        ash: "#8B8B8F",
      },
      fontFamily: {
        display: ["'Oswald'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        rise: "rise 0.7s ease-out both",
        pulseGlow: "pulseGlow 2.6s ease-in-out infinite",
        sway: "sway 4.5s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
