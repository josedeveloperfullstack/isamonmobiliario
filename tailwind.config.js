/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
  
  theme: {
    extend: {
      colors: {
        azulisamon :" rgb(157, 187, 175);",
        rosadoisamon : "rgb(57,64,50)",
        amarilloisamon : "rgb(157, 187, 175)", 
        cafeisamonborder : "rgb(57,64,50)"
      },
      container: {
        center: true, 
        padding: {
          DEFAULT: "2rem",
          sm: "3rem",

        },
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
    },
  },
  plugins: [],
}