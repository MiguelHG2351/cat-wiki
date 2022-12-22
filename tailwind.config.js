/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: {

        // },
        // secondary: {
        // },
        secondary: '#E3E1DC',
        accent: 'rgba(151, 151, 151, 0.1);',
      }
    },
  },
  plugins: [],
}
