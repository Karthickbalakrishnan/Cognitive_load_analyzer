/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        atl: {
          blue: '#0052CC',
          ink: '#172B4D',
          border: '#DFE1E6',
          green: '#36B37E',
          red: '#FF5630',
          yellow: '#FFAB00',
          bgSidebar: '#0C1E3C',
          bgGlobal: '#0747A6'
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace']
      }
    },
  },
  plugins: [],
}