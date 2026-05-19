/** @type {import('tailwindcss').Config} */
export default {
  content:["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fcf9f8",
        primary: "#2c2e2e",
        secondary: "#006493",
        "on-background": "#1c1b1b",
        "secondary-fixed": "#cae6ff",
        midnight: "#111111",
      },
      fontFamily: {
        headline: ["Inter", "sans-serif"],
        display:["Newsreader", "serif"],
      },
    },
  },
  plugins:[],
}