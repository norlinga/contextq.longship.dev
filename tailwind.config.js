/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        ink: {
          50:  '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif:   ['"Playfair Display"', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', '"SF Mono"', '"Fira Code"', 'Menlo', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(9,9,11,0.04), 0 4px 14px rgba(9,9,11,0.06)',
        'card-hover': '0 4px 8px rgba(9,9,11,0.06), 0 12px 32px rgba(9,9,11,0.10)',
        glow: '0 0 0 1px rgba(79,70,229,0.30), 0 8px 28px rgba(79,70,229,0.18)',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
