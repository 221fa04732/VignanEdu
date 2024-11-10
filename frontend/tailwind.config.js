/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'll': '1289px',
      },
      width: {
        'myl1': '30rem',
      },
      fontFamily: {
        'myfont1': 'Quicksand',
      },
      height: {
        'myh1': '35rem',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.5s ease-out',
      },
    },
  },
  plugins: [],
}