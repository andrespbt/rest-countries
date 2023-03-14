/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      mobile: '375px',
      // => @media (min-width: 375px) { ... }

      md: '640px',

      desktop: '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      darkBlue: 'hsl(209, 23%, 22%)', // (Dark Mode Elements)
      veryDarkBlueDarkMode: 'hsl(207, 26%, 17%)', // (Dark Mode Background)
      veryDarkBlueLightMode: 'hsl(200, 15%, 8%)', // (Light Mode Text)
      darkGray: 'hsl(0, 0%, 52%)', // (Light Mode Input)
      veryLightGray: 'hsl(0, 0%, 98%)', // (Light Mode Background)
      white: 'hsl(0, 0%, 100%)', // (Dark Mode Text & Light Mode Elements)
    },
    extend: {},
  },
  plugins: [],
};
