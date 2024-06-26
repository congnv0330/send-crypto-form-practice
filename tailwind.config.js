import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      blue: '#5682F4',
      purple: {
        400: '#462E67',
        300: '#846DA3',
        100: '#F1F1FF',
      },
      gray: {
        700: '#868098',
        200: '#FBFAFB',
      },
      red: {
        400: '#FC4965',
      },
      'div-bound': '#F5F4F7',
      'menu-item': '#F1F1FF',
      body: '#462E67',
      sub: '#868098',
    },
    extend: {
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'drop-shadow': '0px 4px 20px rgba(245, 245, 245, 0.5)',
      },
      lineHeight: {
        4.5: '1.125rem',
        5.5: '1.375rem',
      },
      borderRadius: {
        '4xl': '2.25rem',
      },
      height: {
        12.5: '3.25rem',
      },
      width: {
        12.5: '3.25rem',
      },
      minHeight: {
        12.5: '3.25rem',
      },
      fontSize: {
        xxs: ['0.625rem', '0.75rem'],
      },
    },
  },
  plugins: [],
};
