const { borderRadius } = require('tailwindcss/defaultTheme')

module.exports = function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      rx: (value) => ({
        rx: value
      })
    },
    { values: borderRadius }
  )
}
