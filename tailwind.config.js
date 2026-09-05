/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8fafc', // slate-50
        foreground: '#0f172a', // slate-900
        primary: {
          DEFAULT: '#2563eb', // blue-600
          hover: '#1d4ed8',   // blue-700
          light: '#dbeafe',   // blue-100
        },
        surface: {
          DEFAULT: '#ffffff',
          alt: '#f1f5f9',     // slate-100
        },
        border: '#e2e8f0',    // slate-200
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 4px 14px 0 rgba(37, 99, 235, 0.39)',
        'premium': '0px 10px 30px -5px rgba(0, 0, 0, 0.05), 0px 4px 10px -3px rgba(0, 0, 0, 0.02)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
