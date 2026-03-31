import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        farm: {
          brown: '#3d2b1f',
          'brown-light': '#5a3e28',
          green: '#7c9a5e',
          tan: '#b5956a',
          cream: '#f5ede0',
          'cream-dark': '#eee5d3',
          border: '#d4c5ae',
          text: '#e8d5b0',
        },
      },
    },
  },
  plugins: [typography],
}

export default config
