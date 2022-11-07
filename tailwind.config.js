/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Template/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
