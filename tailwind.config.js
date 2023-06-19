/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md: '768px',
      lg:'976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        pinkTest: '#FFC0CB',
        btnColor: '#EBECF1',
        btnBorderColor: '#4E4E4E',
        btnFromColor: '#EBECF1',
        btnViaColor: '#C0C4CE',
        btnToColor: '#A9AEBB'
      },
      borderRadius: {
        radius: '40px'
      },
      width: {
        width: '402px',
      },
      height:{
        height: '142px'
      }
    },
  },
  plugins: [],
}

