/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        plants: "url('./assets/images/background.jpg')",
      },
      rotate: {
        270: "270deg",
      },
    },
  },
  plugins: [],
};
