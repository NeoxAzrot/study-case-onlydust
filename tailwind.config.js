/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        slate: {
          400: '#8e93ac',
          500: '#5e6272',
        },
        gray: {
          100: '#f3f0ee',
          300: '#404040',
          400: '#7a7877',
          800: '#0e0d2e',
          900: '#181818',
        },
        orange: {
          400: '#ff9000',
        },
        green: {
          400: '#00ffe4',
        },
        purple: {
          400: '#ae00ff',
        },
      },
      letterSpacing: {
        normal: '-0.01em',
      },
      boxShadow: {
        card: '0px 8px 32px 0px rgba(0, 0, 0, 0.16)',
        modal: '0px 8px 64px 0px rgba(0, 0, 0, 0.5)',
        button:
          '0px -1px 2px 1px rgba(0, 0, 0, 0.32) inset, 0px 2px 4px 0px rgba(0, 0, 0, 0.32)',
      },
      animation: {
        'tab-underline': 'tab-underline 3s ease-in-out infinite',
      },
      keyframes: {
        'tab-underline': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
      },
    },
  },
  plugins: [],
};
