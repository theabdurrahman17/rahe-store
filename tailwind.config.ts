import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F6F1",
        sand: "#E8DFD1",
        beige: "#DCCDB6",
        taupe: "#8A7E72",
        charcoal: "#2E2A26"
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 20px 50px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};

export default config;
