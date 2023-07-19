/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {},

      container: {
        center: true,
        padding: {
          DEFAULT: '0.625rem',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
