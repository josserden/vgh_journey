/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {},

      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
