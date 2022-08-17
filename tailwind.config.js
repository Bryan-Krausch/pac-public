/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#6EC1E4",
        "secondary": "#54595F",
        "text": "#7A7A7A",
        "accent": "#61CE70",
        // For Background
        "light-green": "#8BC754",
        "very-ligth-blue": "#CBF3F0",
        "dark-blue": "#163680",
        'blue-menu': "#163680",
        "focus": "#fcb900",
        
      },
      backgroundColor: {
        "primary": "#6EC1E4",
        "secondary": "#54595F",
        "text": "#7A7A7A",
        "accent": "#61CE70",
        // For Background
        "light-green": "#8BC754",
        "very-ligth-blue": "#CBF3F0",
        "dark-blue": "#163680",
        'blue-menu': "#163680",
        "focus": "#fcb900",
      },
      keyframes: {
        bgAnimation: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.25)' },
        }, 
        notification: {
          '0%': {transform: 'translateX(200%)'},
          '30%, 80%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(200%)'},
        }
      },
      animation: {
        "bgAnimation": "bgAnimation 5.5s ease-in-out infinite",
        "notification": "notification 6s ease-in-out"
      }
    },
  },
  plugins: [],
}
// // background-image: linear-gradient(
// 70deg, #163680 13%, var( --e-global-color-0b92e82 ) 100%);
