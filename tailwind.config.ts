import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "stone-100": "hsl(30, 54%, 90%)",
        "stone-150": "hsl(30, 18%, 87%)",
        "stone-600": "hsl(30, 10%, 34%)",
        "stone-900": "hsl(24, 5%, 18%)",
        "brown-800": "hsl(14, 45%, 36%)",
        "rose-800": "hsl(332, 51%, 32%)",
        "rose-50": "hsl(330, 100%, 98%)",
      },
      fontFamily: {
        inter: "inter",
        youngSerif: ["var(--font-youngSerif)"],
        outfit: ["var(--font-outfit)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
