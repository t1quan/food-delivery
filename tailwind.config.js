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
         }
      },
   },
   plugins: [],
}