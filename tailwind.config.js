/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00ff88',
          dark: '#00cc6a',
          light: '#4dffaa',
        },
        secondary: {
          DEFAULT: '#ff00ff',
          dark: '#cc00cc',
          light: '#ff4dff',
        },
        accent: {
          DEFAULT: '#00d4ff',
          dark: '#00a8cc',
          light: '#4de0ff',
        },
        dark: {
          bg: '#0a0a0f',
          card: '#13131a',
          hover: '#1a1a25',
          border: '#2a2a35',
        }
      },
      fontFamily: {
        gaming: ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'neon-primary': '0 0 20px rgba(0, 255, 136, 0.5)',
        'neon-secondary': '0 0 20px rgba(255, 0, 255, 0.5)',
        'neon-accent': '0 0 20px rgba(0, 212, 255, 0.5)',
      },
      backgroundImage: {
        'gradient-gaming': 'linear-gradient(135deg, #00ff88 0%, #00d4ff 50%, #ff00ff 100%)',
      }
    },
  },
  plugins: [],
}
