/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px'
    },
    extend: {
        colors: {
          primary: '#0284c7',
          dark: '#020617',
          abu: '#64748b',
          putih: '#ffffff'
        },
        screens: {
          '2xl' : '1320px'
        },
    }, 
  },
  plugins: [],
}

