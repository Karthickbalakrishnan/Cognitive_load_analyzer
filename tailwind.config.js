/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        atlassian: {
          blue: '#0052CC',
          darkBlue: '#091E42',
          text: '#172B4D',
          muted: '#5E6C84',
          bgLight: '#FAFBFC',
          border: '#DFE1E6',
        }
      },
      fontSize: {
        'xxs': '0.65rem',
      }
    },
  },
  plugins: [],
}