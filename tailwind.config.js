/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      md: '768px',
      xl: '1024px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    fontFamily: {
      sparkasse_rg: ['Sparkasse Rg', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'login-form': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        checkbox: '0px 0px 0px 1px #999999',
      },

      colors: {
        red: '#FF0000', //(Sparkasse/Basis/Rot)
        gray: {
          100: '#F0F0F0', //(Sparkasse/Basis/Hellgrau)
          200: '#E3E3E3', //(Sparkasse/Basis/Grau2)
          300: '#D9D9D9', //(Sparkasse/Basis/Grau3)
          400: '#CCCCCC', //(Sparkasse/Basis/Grau4)
          500: '#BBBBBB', //(Sparkasse/Basis/Grau5)
          550: '#BFBFBF',
          600: '#999999', //(Sparkasse/Basis/Grau6)
          700: '#666666', //(Sparkasse/Basis/Dunkelgrau1)
          800: '#444444', //(Sparkasse/Basis/Dunkelgrau2)
        },
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '0.625rem',
          md: '2rem',
          xl: '2rem',
        },
      },
      boxShadow: {
        hero: '0 7px 47px 57px rgba(255,255,255,1)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
