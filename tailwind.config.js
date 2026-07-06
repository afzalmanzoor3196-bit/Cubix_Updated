/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        panel: '#111213',
        brand: {
          DEFAULT: '#3ee073',
          light: '#5cf291',
          dark: '#1fae52',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.75rem',
      },
    },
  },
  plugins: [],
}
