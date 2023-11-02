/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "landing-marquee": "16rem",
        "song-banner": "20rem",
      }
    },
    animation: {
      marquee: "marquee 25s linear infinite",
      marqueeCopy: "marqueeCopy 25s linear infinite",
      marqueeReverse: "marqueeReverse 25s linear infinite",
      marqueeReverseCopy: "marqueeReverseCopy 25s linear infinite",
      swipeRight: "swipeRight 1s linear",
      swipeLeft: "swipeLeft 1s linear"     
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      marqueeCopy: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
      marqueeReverse: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(100%)' },
      },
      marqueeReverseCopy: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
      swipeRight: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(300%)' },
      },
      swipeLeft: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-300%)' },
      },
      
    },
    pointerEvents: {
      'none': 'none',
    },
  },
  plugins: [],
}