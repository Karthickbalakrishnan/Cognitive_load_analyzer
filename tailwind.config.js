/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slateDark: {
          bgCanvas: '#0F172A',
          bgCard: '#1E293B',
          borderToken: '#334155',
          textMuted: '#94A3B8'
        }
      }
    },
  },
  plugins: [],
}