/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#253266",
        secondary: "#F4A442",
        dimWhite: "#F5F5F5",
        darkBlue: "#1C264E",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        'instrument-sans': ["Instrument Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

