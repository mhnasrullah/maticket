/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./sources/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'base' : ['Poppins', 'sans-serif']
    },
    colors : {
      'trans' : '#00000000',
      'white' : '#FEFEFE',
      'blue' : '#108FEB',
      'black' : "#000000",
      'gray' : '#B8B8B8',
      'l-gray' : '#EFEEEE'
    },
    extend: {
      
    },
  },
  plugins: [],
}
