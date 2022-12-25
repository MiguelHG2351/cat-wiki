const rxPlugin = require('./apps/tailwindcss/rxSupport')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#291507',
        pulse: '#6C7D89',
        secondary: '#E3E1DC',
        tertiary: '#DEC68B',
        accent: 'rgba(151, 151, 151, 0.1);'
      }
    }
  },
  plugins: [rxPlugin]
}
