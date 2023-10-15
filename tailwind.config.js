/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'gradient-join': 'linear-gradient(0deg, #FAFBFC 11.67%, rgba(250, 251, 252, 0.08) 100%), url(/src/assets/joinBg.png)'
        
      },
      boxShadow: {
        'custom': '2px 4px 15px 0px #8585A740',
      }
    },
  },
  plugins: [],
}
