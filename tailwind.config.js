/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bordo: {
          light: '#801A31',
          DEFAULT: '#530A1B',
          dark: '#30030E',
        },
        roseGold: {
          light: '#F5D6CE',
          DEFAULT: '#E3AFA3',
          dark: '#C28577',
        },
        offWhite: '#FAF5F5',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}