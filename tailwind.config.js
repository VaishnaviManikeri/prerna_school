/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Georgia', 'Playfair Display', 'serif'],
        'sans': ['Inter', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}