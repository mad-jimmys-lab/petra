/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        main : '#8a1216',
        sub : '#8a1216'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

