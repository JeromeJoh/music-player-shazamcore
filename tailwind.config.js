/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#2e2f32',
        gray: '#808080',
        bgWhite: '#fafafa',
        navText: '#e5e5e5',
        titleBlack: '#333333',
        textBlack: '#666666',
        bgGray: '#ededed',
        borderGray: '#dbdbdb',
        activeBlue: '#5079d9',
        brightRed: '#d44d44',
        darkRed: '#b02d32',
      },
      boxShadow: {
        inner: '0 0 10px 20px #fafafa inset',
      },
      transitionProperty: {
        hover: 'all .5s ease-in',
      },
      animation: {
        slideup: 'slideup .5s ease-in',
        slidedown: 'slidedown .5s ease-in-out',
        slideleft: 'slideleft .5s ease-in-out',
        slideright: 'slideright .5s ease-in-out',
        wave: 'wave 1.2s linear infinite',
        slowfade: 'slowfade 2.2s ease-in-out',
      },
      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: 'translateY(25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slidedown: {
          from: { opacity: 0, transform: 'translateY(-25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slideleft: {
          from: { opacity: 0, transform: 'translateX(-20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideright: {
          from: { opacity: 0, transform: 'translateX(20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        wave: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
    },
  },
};
