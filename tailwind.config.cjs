/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#D5EB04',
        brandDarker: '#cadf03',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        moveWave: {
          '0%': {
            transform: 'translateX(0)',
          },

          '50%': {
            transform: 'translateX(-25%)',
          },

          '100%': {
            transform: 'translateX(-50%)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.4s forwards',
        fadeInModal: 'fadeIn 0.2s forwards',
        moveWaveFirst: 'moveWave 10s -3s linear infinite',
        moveWaveSecond: 'moveWave 25s linear infinite',
        moveWaveThird: 'moveWave 50s -1s linear infinite',
      },
    },
  },
  plugins: [],
};
