/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "400px":"400px",
        "500px":"500px",
        "600px":"600px",
        "800px":"800px",
        "1000px":"1000px",
        "1200px":"1200px",
      }
    },
  },
  plugins: [],
}

