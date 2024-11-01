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
    },
  },
  plugins: [],
}