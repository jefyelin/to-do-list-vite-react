/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    colors: {
      'blue': '#4EA8DE',
      'blue-dark': '#1E6F9F',
      'danger': '#E25858',
      'gray-100': '#F2F2F2',
      'gray-200': '#D9D9D9',
      'gray-250': '#C8C8C8',
      'gray-300': '#808080',
      'gray-400': '#333333',
      'gray-500': '#262626',
      'gray-600': '#1A1A1A',
      'gray-700': '#0D0D0D',
      'purple': '#8284FA',
      'purple-dark': '#5E60CE',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
