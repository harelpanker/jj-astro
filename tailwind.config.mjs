import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        alef: ["Alef, sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "dark-green": "#232E26",
        "light-green": "#D9EFDE",
        "theme-white": "F2F4F8",
      },
    },
  },
  plugins: [],
};
