/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/pages/**/*.{js,ts,jsx,tsx}',
    'src/components/**/*.{js,ts,jsx,tsx}',
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
