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

      fontFamily: {
        "roboto": "'Roboto' , sans-serif",
        "sofia": "'Sofia Sans', sans-serif"
      }
    }
  },
  plugins: [

    require( 'tailwind-scrollbar' )( { nocompatible: true } ),
    require( 'tailwindcss-text-balance' ),
  ],
}

