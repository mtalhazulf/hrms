/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
    theme: {
      screens:{
        sm: "640px",
        md: "760px",
        lg: "1280px",
  
      },
    
    extend: {},
  },
  plugins: [],
}