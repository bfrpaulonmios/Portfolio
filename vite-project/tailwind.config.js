/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#2ECC71',
          200: '#00ae56',
          300: '#006a18',
        },
        accent: {
          100: '#3498DB',
          200: '#004079',
        },
        text: {
          100: '#333333',
          200: '#5c5c5c',
        },
        bg: {
          100: '#F5F5F5',
          200: '#ebebeb',
          300: '#c2c2c2',
        },
      },
    },
  },
  plugins: [],
}

