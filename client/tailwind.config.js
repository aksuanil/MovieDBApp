const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Aldrich': ['Aldrich', 'sans-serif'],
      'BungeeOutline': ['"Bungee Outline"', 'serif'],
      'Iceberg': ['Iceberg', 'serif'],
      'Karla': ['"Karla"', 'serif'],
      'Nova-Square': ['"Nova Square"', 'serif'],
      'Spectral': ['Spectral', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
