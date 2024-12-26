/** @type {import('tailwindcss').Config} */
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
      },
      borderRadius: {
        custom: "64% 36% 70% 30% / 30% 18% 82% 70% ",
        custom2: "89% 11% 82% 18% / 51% 75% 25% 49% ",
        custom3: "54% 46% 70% 30% / 100% 100% 0% 0% ",
      },
    },
  },
  plugins: [],
};
