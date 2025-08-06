/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f8f4',
          100: '#eaf0e6',
          200: '#d6e2ce',
          300: '#b8cda7',
          400: '#94b17d',
          500: '#87A96B',
          600: '#6b8751',
          700: '#546a41',
          800: '#445537',
          900: '#39472f',
        },
        ivory: {
          50: '#fefefe',
          100: '#fdfdfc',
          200: '#F7F5F3',
          300: '#f0ede8',
          400: '#e6e1da',
          500: '#d9d2c8',
          600: '#c4b9aa',
          700: '#a89b87',
          800: '#8b7d6b',
          900: '#726658',
        },
        coral: {
          50: '#fdf5f6',
          100: '#fce8ea',
          200: '#f9d6da',
          300: '#f4b7bd',
          400: '#ed8f98',
          500: '#E8B4B8',
          600: '#d4455a',
          700: '#b23348',
          800: '#952c3f',
          900: '#7f293a',
        },
        charcoal: {
          50: '#f7f8f9',
          100: '#edeef1',
          200: '#d7dae0',
          300: '#b4bac4',
          400: '#8b94a3',
          500: '#6c7688',
          600: '#586070',
          700: '#4a505c',
          800: '#40454e',
          900: '#2D3748',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};