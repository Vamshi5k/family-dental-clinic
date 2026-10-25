/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        cream: '#F3EEE6',
        ink: '#12292B',
        teal900: '#0C3B3D',
        teal700: '#136366',
        teal100: '#DDEFEC',
        mint: '#7FD1BF',
        gold: '#C9A15B',
        coral: '#E8765C',
        muted: '#5B6F70',
      },
      fontFamily: {
        heading: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
