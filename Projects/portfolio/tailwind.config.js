/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Slate 900
        secondary: "#334155", // Slate 700
        accent: "#3b82f6", // Blue 500
      },
    },
  },
  plugins: [],
}