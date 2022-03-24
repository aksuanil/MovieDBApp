const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {fontFamily: {
      sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans]
    }
    },
  },
  plugins: [],
}
