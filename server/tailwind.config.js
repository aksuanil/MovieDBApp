module.exports = {
  content: ["./views/*.{html,js,ejs}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {      
      colors: {
      themecolors: {
        darkblue: '#2B2E4A',
        red: '#E84545',
        darkred: '#903749',
        purple: '#53354A',
      },
    }
  },
  },
  plugins: [require('flowbite/plugin')],
}
