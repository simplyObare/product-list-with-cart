/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: 'hsl(14, 86%, 42%)',
        green: 'hsl(159, 69%, 38%)',
      },
      fontFamily: {
        sansRedHat: ['Red Hat Text', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
