/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'first-background': 'linear-gradient(102.74deg, #000000 -1.31%, #4F678E 46.78%, #96A9CA 120.48%);',
      }),
      colors: {
        'ui-background': '#EEE9E9',
      }
    },
  },
  plugins: [],
}