import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f4ff",
          100: "#dde6ff",
          200: "#c2d1ff",
          300: "#9db3ff",
          400: "#7089ff",
          500: "#4a5ef7",
          600: "#3440ec",
          700: "#2a31d8",
          800: "#262baf",
          900: "#252a8a",
          950: "#161856",
        },
        ocean: {
          DEFAULT: "#0a4a6e",
          light: "#1a6a9e",
          dark: "#062d45",
        },
        sand: {
          DEFAULT: "#f5ede0",
          light: "#fdf8f2",
          dark: "#e8d5ba",
        },
        coral: {
          DEFAULT: "#e8735a",
          light: "#f09480",
          dark: "#c45640",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e2c97a",
          dark: "#a07c30",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-ocean":
          "linear-gradient(135deg, #062d45 0%, #0a4a6e 50%, #1a6a9e 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
