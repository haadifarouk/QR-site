/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      sm : '480px',
      md : '768px',
      lg : '976px',
      xl : '1440px'
    },
    extend: {
      colors:{
        White: 'hsl(0, 0%, 100%)' ,
        Lightgray: 'hsl(212, 45%, 89%)' ,
        Grayishblue: 'hsl(220, 15%, 55%)' ,
        Darkblue: 'hsl(218, 44%, 22%)'
      },
      fontFamily: {
        'outfit': 'Outfit, sans-serif',
        'roboto': 'Roboto, sans-serif',
      }
    },
  },
  plugins: [],
}

