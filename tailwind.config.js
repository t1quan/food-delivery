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
         },
         backgroundImage: {
            'texture': "url('./src/assets/images/bg_texture.png')",
         },
         content: {
            'gray-10': 'rgba(0, 0, 0, 0.66)',
            'gray-20': '#d9d9d9',
            'gray-30': '#5e5e5e',
            'gray-40': '#a3a3a3',
         }
      },
   },
   plugins: [],
}