/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'Desaturated-Red': 'hsl(0, 36%, 70%)',
        'Soft-Red': 'hsl(0, 93%, 68%)',
        'Dark-Grayish-Red': 'hsl(0, 6%, 24%)'
      },
      fontFamily: {
        Josefin : ["Josefin"]
      }
    },
  },
  plugins: [],
}

