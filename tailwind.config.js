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
      dropShadow: {
        '3': '0 35px 35px rgba(0, 0, 0, 0.25)',
      },
      width: {
        width: '150px',
      },
      height:{
        height: '50px'
      },
      'animation': {
            'gradient-x':'gradient-x 3s ease infinite',
            'gradient-y':'gradient-y 3s ease infinite',
            'gradient-xy':'gradient-xy 3s ease infinite',
        },
        'keyframes': {
            'gradient-y': {
                '0%': {
                    'background-size':'400% 0%',
                    'background-position': 'bottom right'
                },
                '100%': {
                    'background-size':'0 0',
                    'background-position': 'top left'
                }
            },
            'gradient-x': {
                '0%, 100%': {
                    'background-size':'200% 200%',
                    'background-position': 'left center'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            },
            'gradient-xy': {
                '0%, 100%': {
                    'background-size':'400% 400%',
                    'background-position': 'left center'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            }
        },
      }
  },
  plugins: [],
}
