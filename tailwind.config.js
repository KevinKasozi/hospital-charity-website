/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // Enable dark mode if needed
  theme: {
    extend: {
      colors: {
        'hospital-blue': {
          DEFAULT: '#4299e1',
          dark: '#3182ce',
          light: '#63b3ed',
        },
        'charity-red': {
          DEFAULT: '#f56565',
          dark: '#e53e3e',
          light: '#fc8181',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
