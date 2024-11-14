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
        primary: "#D75337",
        "primary-dark": "#BD442B",
        "primary-light": "#EB6A4E",
        secondary: "#4A3456",
        "secondary-dark": "#2D1F34",
        "secondary-darker": "#352E39",
        "secondary-light": "#856D93",
        "dark-green": "#1E1E21",
        "raisin-black": "#222222",
        arsenic: "#424242",
        grey: "#ECECEC",
      },
      fontFamily: {
        lexend: ["var(--font-lexend-deca)"],
      },
    },
  },
  plugins: [],
  prefix: "tw--",
} satisfies Config;
