/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      Poppins: ['Poppins'],
      Nunito: ['Nunito Sans'],
      DMSans: ['DM Sans'],
    },
    extend: {},
  },
  plugins: [],
};
