/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors : {
        primary : {
          DEFAULT : "#8692A6",
           foreground: "#fff"
          },
        secondary : {
          DEFAULT: "#fff",
          foreground: "#0000"
        },
        whitedefault : "#FBF9F9",
        gray : {
          typo : "#696F79"
        }
      },
      boxShadow: {
        basic: '0px 15px 40px 5px #EDEDED',
      },
      borderRadius : {
        basic : "30px"
      },
      fontFamily: {
        body : ["Poppins"],
      },
    },
  },
  plugins: [],
}

