/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        descolor: "#131318",
        cardDescolor: "#5A5A5D",
        descolor70: "#131318B3",
        light: "#F5F5F5",
        navCol: "#424247",
        signBtn: "#FF5400",
        priceCol: "#FF5400",
      },
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
      cabin: ["Cabin", "sans-serif"],
      mulish: ["Mulish", "sans-serif"],
      titillium: ["Titillium Web", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
