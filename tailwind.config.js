/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // if you keep code in src/
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "0.75rem", // Extra Small
        sm: "0.875rem", // Small
        base: "1rem", // Base
        lg: "1.125rem", // Large
        xl: "1.25rem", // Extra Large
        "2xl": "1.5rem", // 2x Extra Large
        "3xl": "1.875rem", // 3x Extra Large
        "4xl": "2.25rem", // 4x Extra Large
        "5xl": "3rem", // 5x Extra Large
        "6xl": "3.75rem", // 6x Extra Large
      },
    },
  },
  plugins: [],
};
