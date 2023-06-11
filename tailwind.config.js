/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./scr/index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'desktop': "url(../imágenes/bg-main-desktop.png')",
      }
    },
  },
  plugins: [],
}

