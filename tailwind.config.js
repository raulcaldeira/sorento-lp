/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sorento: {
          dark: '#0A1628',
          navy: '#1B365D',
          gold: '#C4A265',
          'gold-dark': '#A68B4B',
          graphite: '#1A1A1A',
          silver: '#E8E8E8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 0, 0, 0.08)',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
