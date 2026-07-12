/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        bg: '#F7EFE1',
        bgAlt: '#EDE0C8',
        primary: '#5C3A21',
        primaryLight: '#8B5E3C',
        gold: '#C89566',
        rose: '#A6373F',
        text: '#3A2415',
        textSoft: '#7A5C42',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        script: ['Caveat', 'cursive'],
        body: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        lidOpen: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(-115deg) translateY(-10px)' },
        },
        glowIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both',
        lidOpen: 'lidOpen 1.1s 0.2s cubic-bezier(0.22,1,0.36,1) forwards',
        glowIn: 'glowIn 0.9s 0.5s cubic-bezier(0.22,1,0.36,1) forwards',
      },
    },
  },
  plugins: [],
}