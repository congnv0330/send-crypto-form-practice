import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'div-bound': '#F5F4F7',
        'menu-item': '#F1F1FF',
        body: '#462E67',
        sub: '#868098',
      },
      boxShadow: {
        'drop-shadow': '0px 4px 20px rgba(245, 245, 245, 0.5)',
      },
      lineHeight: {
        4.5: '1.125rem',
      },
      borderRadius: {
        '4xl': '2.25rem',
      },
      minHeight: {
        12.5: '3.25rem',
      },
    },
  },
  plugins: [],
};
