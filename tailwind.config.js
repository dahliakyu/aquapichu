/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'

  variants: {
    extend: {},
  },
  theme: {
    extend: {
      fontFamily: {
        'deva': ['deva-ideal'],
      }
    },
  },
  plugins: [],
}
