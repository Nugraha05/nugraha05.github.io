/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}", "./src/*.{html,js,php}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'white': '#FCFCFC',
        'black': '#0D1316',
        'red': '#CE2027'
      },
    },
  },
  plugins: [],
}