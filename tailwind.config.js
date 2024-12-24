/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            'beatrice': 'BeatriceDeck',
            'poppins': '"Poppins", serif',
         },
         colors: {
            'black': '#03081F',
            'orange': '#FC8A06',
            'green': '#028643',
            'gray': '#D9D9D9',
         },
         backgroundImage: {
            'black-gradient': 'linear-gradient(-149deg, rgba(255, 255, 255, 0) 0%, rgba(3, 8, 31, 0.19) 48%, rgba(3, 8, 31, 0.89) 90%)',
         },
         aspectRatio: {
            '4/3': '4 / 3',
         },
      },
   },
   plugins: [],
}