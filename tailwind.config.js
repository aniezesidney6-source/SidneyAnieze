/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        meadow: {
          bg: '#C7E5D2',
          deep: '#2E7D5B',
          accent: '#3FA34D',
          ink: '#15281C',
          muted: '#5B7466',
          pink: '#F5A9B8',
        },
        'primary-foreground': '#FFFFFF',
      },
      fontFamily: {
        sans: ['"General Sans"', 'system-ui', 'sans-serif'],
        display: ['"General Sans"', 'sans-serif'],
      },
      boxShadow: {
        nav: '0 6px 24px rgba(20,20,28,0.10)',
        card: '0 18px 44px rgba(21,40,28,0.16)',
      },
      transitionTimingFunction: {
        deck: 'cubic-bezier(0.75, 0, 0.24, 1)',
        bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
