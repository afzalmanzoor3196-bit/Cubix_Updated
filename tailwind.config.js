/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#121212',
        panel: '#1e1e1e',
        brand: {
          DEFAULT: '#0052ff',
          light: '#3b82f6',
          dark: '#003ecc',
        },
        accent: {
          DEFAULT: '#00ff3c',
          light: '#39ff14',
          dark: '#00c830',
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
