/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{vue,js}",
    "./layOuts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-Out",
      },
      colors: {
        /* light */
        colorPrimaryLight: "#5F5B55",
        colorTextLight: "#131313",
        colorBackgroundLight: "#FFF9EF",
        colorOutlineLight: "#131313",

        /* dark */
        colorPrimaryDark: "#5F5B55",
        colorTextDark: "#EDE3D4",
        colorBackgroundDark: "#131313",
        colorOutlineDark: "#EDE3D4",
      },
    },
  },
};
