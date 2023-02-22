/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'convex-md': '4px 4px 12px #0A0A0A, -4px -4px 12px #2E2E2E;',
        'concave-sm': 'inset 2px 2px 4px #0A0A0A, inset -2px -2px 4px #252525;'
      },
      transitionProperty: {
        'height': 'height'
      }
    },
  },
  plugins: [],
}
