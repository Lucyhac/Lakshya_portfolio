/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        garage: {
          black: '#0a0906',
          charcoal: '#111009',
          dark: '#1a1710',
          chrome: '#c8c0b0',
          'chrome-bright': '#e8e0d0',
          amber: '#d4820a',
          'amber-glow': '#f0a020',
          orange: '#c05520',
          red: '#9b1a1a',
          cream: '#f0ead8',
          'cream-dim': '#b8b099',
          muted: '#6a6050',
        },
      },
    },
  },
  plugins: [],
}
