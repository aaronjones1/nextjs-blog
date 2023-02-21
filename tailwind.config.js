/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'convex': '6px 6px 12px #000000, -6px -6px 12px #323232;',
        'concave-sm': 'inset 2px 2px 4px #090909, inset -2px -2px 4px #323232;'
      }
    },
  },
  plugins: [],
}
