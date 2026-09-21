/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        clay:  '#B5651D',
        mud:   '#6B4A2B',
        ink:   '#1A1614',
        gold:  '#C9A227',
        blood: '#7A1F1F',
      },
      fontFamily: {
        sans: ['Noto Kufi Arabic', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}