/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#0a0d14',
          card: '#111726',
          cardHover: '#161f33',
          border: '#1e293b',
          borderHover: '#38bdf8',
          accent: '#0284c7',
          neon: '#00f0ff',
          green: '#10b981',
          amber: '#f59e0b',
          purple: '#8b5cf6',
          rose: '#f43f5e'
        }
      },
      fontFamily: {
        sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-line': 'glowLine 3s ease-in-out infinite',
      },
      keyframes: {
        glowLine: {
          '0%, 100%': { opacity: '0.4', transform: 'translateX(-10%)' },
          '50%': { opacity: '0.9', transform: 'translateX(10%)' },
        }
      }
    },
  },
  plugins: [],
}
