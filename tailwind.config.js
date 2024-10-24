/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        default: "0px 0px 3px rgba(0, 0, 0, 1)",
      },
      screens: {
        xs: "480px",
      },
      fontFamily: {
        text: ["Roboto", "sans-serif"],
        title: ['"Roboto Serif"', '"serif"'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          "text-shadow": "0px 0px 3px rgba(0, 0, 0, 1)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
