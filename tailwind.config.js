/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#050A16',
          900: '#0A1128',
          800: '#101B38',
          700: '#16264A',
          600: '#1E3A66',
          500: '#2A4C82',
        },
        gold: {
          200: '#F5E6BE',
          300: '#EDD69A',
          400: '#E2C273',
          500: '#D4AF37',
          600: '#B8901F',
          // Accessible gold for text on light backgrounds (>= 4.5:1 on ivory).
          ink: '#7A5F12',
        },
        ivory: {
          50: '#FDFCF9',
          100: '#F7F4EC',
          200: '#EDE8DA',
        },
      },
      boxShadow: {
        card: '0 4px 24px -6px rgba(5, 10, 22, 0.14)',
        lift: '0 18px 42px -12px rgba(5, 10, 22, 0.32)',
        goldglow: '0 0 0 1px rgba(212, 175, 55, 0.35), 0 12px 32px -10px rgba(212, 175, 55, 0.4)',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-120%) skewX(-18deg)' },
          '100%': { transform: 'translateX(320%) skewX(-18deg)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1) translate3d(0,0,0)' },
          '100%': { transform: 'scale(1.12) translate3d(-2%, -2%, 0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.45)' },
          '50%': { boxShadow: '0 0 0 10px rgba(212, 175, 55, 0)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.1s ease-out',
        kenburns: 'kenburns 14s ease-in-out infinite alternate',
        pulseGlow: 'pulseGlow 2s ease-out infinite',
      },
    },
  },
  plugins: [],
};
