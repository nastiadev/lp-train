/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    screens:{
      sm:'480px',
      md: '768px',
      lg:'976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        btnColor: '#EBECF1',
        btnBorderColor: '#4E4E4E',
        btnFromColor: '#EBECF1',
        btnViaColor: '#C0C4CE',
        btnToColor: '#A9AEBB'
      },
    }
  },
  plugins: [],
}
