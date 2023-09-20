/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true
    },


    extend: {
      colors: {


        mainRed: "#B21E01",
        mainDark: "#000000",
        mainWhite: "#fff"

      },
    },
  },
  plugins: [],
}

