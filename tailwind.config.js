/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        bg: '#FBF6EF',
        bgAlt: '#F3E7DD',
        primary: '#3B1F2B',
        primaryLight: '#6B3A4A',
        gold: '#C9974D',
        rose: '#D98C96',
        text: '#2A1A20',
        textSoft: '#6B5A5F',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Sora', 'sans-serif'],
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
        fireflyRise: {
          '0%':   { transform: 'translateY(0) translateX(0)', opacity: 0 },
          '10%':  { opacity: 1 },
          '50%':  { transform: 'translateY(-50vh) translateX(20px)', opacity: 0.8 },
          '90%':  { opacity: 0.3 },
          '100%': { transform: 'translateY(-105vh) translateX(-15px)', opacity: 0 },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both',
        lidOpen: 'lidOpen 1.1s 0.2s cubic-bezier(0.22,1,0.36,1) forwards',
        glowIn: 'glowIn 0.9s 0.5s cubic-bezier(0.22,1,0.36,1) forwards',
        fireflyRise: 'fireflyRise linear infinite',
      },
    },
  },
  plugins: [],
}