/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Nunito: ['Nunito Sans', 'sans-serif'],
        DMSans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
