/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },

  plugins: [require("tailwindcss-animate")],
}