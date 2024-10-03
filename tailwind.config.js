/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#772EDF",
        dark: "#363636",
        secondary: "#261F30",
        third: "#f1f1f1",
      },
      container: {
        center: true,
        padding: {
          md: "3rem",
          sm: "2rem",
          DEFAULT: "2rem",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
