import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./types/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#04030b",
        nebula: {
          50: "#f6ecff",
          100: "#ecd8ff",
          200: "#d7b2ff",
          300: "#bd87ff",
          400: "#a864ff",
          500: "#9440ff",
          600: "#7b21f1",
          700: "#6418c4",
          800: "#50189a",
          900: "#2d1154",
        },
        aurora: {
          blue: "#57d6ff",
          pink: "#ff78d1",
          gold: "#ffd76a",
          purple: "#9263ff",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
        script: ["var(--font-dancing)", "cursive"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.12), 0 24px 80px rgba(130, 87, 255, 0.32)",
        soft: "0 30px 80px rgba(0,0,0,0.35)",
        gold: "0 0 50px rgba(255, 215, 106, 0.35)",
      },
      backgroundImage: {
        "aurora-mesh":
          "radial-gradient(circle at top, rgba(87,214,255,0.28), transparent 30%), radial-gradient(circle at 20% 20%, rgba(255,120,209,0.18), transparent 30%), radial-gradient(circle at 80% 0%, rgba(255,215,106,0.14), transparent 28%), linear-gradient(180deg, rgba(4,3,11,0.94), rgba(4,3,11,1))",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        drift: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(24px, -18px, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.06)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        rise: {
          "0%": { transform: "translateY(40px) scale(0.9)", opacity: "0" },
          "100%": { transform: "translateY(-120vh) scale(1.05)", opacity: "1" },
        },
        fall: {
          "0%": { transform: "translateY(-20vh) rotate(0deg)", opacity: "0" },
          "15%": { opacity: "1" },
          "100%": { transform: "translateY(120vh) rotate(360deg)", opacity: "0" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.25", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        drift: "drift 12s ease-in-out infinite",
        pulseGlow: "pulseGlow 6s ease-in-out infinite",
        shimmer: "shimmer 7s linear infinite",
        spinSlow: "spinSlow 18s linear infinite",
        twinkle: "twinkle 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
