/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        right: '2px 2px 15px -5px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}

