/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "520px",
      md: "770px",
      lg: "955px",
      xl: "1100px",
      "2xl": "1200px",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppoins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
