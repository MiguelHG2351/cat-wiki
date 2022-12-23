const rxPlugin = require('./apps/tailwindcss/rxSupport');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    rx: {
      'rounded-none': '0',
      'rounded-sm': '0.125rem',
      'rounded': '0.25rem',
      'rounded-md': '0.375rem',
      'rounded-lg': '0.5rem',
      'rounded-xl': '0.75rem',
      'rounded-2xl': '1rem',
      'rounded-3xl': '1.5rem',
      'rounded-full': '9999px',
    },
    extend: {
      colors: {
        secondary: '#E3E1DC',
        accent: 'rgba(151, 151, 151, 0.1);',
      }
    },
  },
  plugins: [rxPlugin],
}
