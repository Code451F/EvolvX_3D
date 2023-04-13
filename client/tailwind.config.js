/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#050816",
        primary: "#000000",
        secondary: "#ffffff",
        tertiary: "#ff8f00",
        "black-100": "#f59d2c",
        "black-200": "#000000",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #35291e",
      },
      screens: {
        xs: "450px",
        xxs: "350px" ,
        sm:'600px'
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};