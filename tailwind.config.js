/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#D8B4FE",
          DEFAULT: "#A855F7",
          dark: "#7E22CE",
        },
        secondary: {
          light: "#FFE0C2",
          DEFAULT: "#FFCBA0",
          dark: "#E0A877",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
