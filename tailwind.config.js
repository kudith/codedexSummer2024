/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'sea-blue': '#305374',
        'light-brown': '#DAB281',
        'eggshell': '#F4EAD7',
        'dark-brown': '#49361F',
        'dark-blue': '#263640',
        'dark-green': '#3F593F',
        'olive-green': '#94B973',
        'light-green': '#DBF4A7',
      },
      fontFamily: {
        inknut: ['Inknut Antiqua', 'serif'],
        hind: ['Hind', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
