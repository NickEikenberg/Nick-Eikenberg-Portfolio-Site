module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        icon: {
          js: '#EFD81D',
          react: '#61DBFB',
          tailwind: '#06B6D4',
          html: '#DC4C24',
          css: '#254ADD',
          node: '#5DAC46',
          mongodb: '#4BAB3D',
        },
      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      'border-opacity': ['hover'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
