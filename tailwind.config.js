module.exports = {
  content: [
    './**/*.liquid', // All Liquid files in the theme
    './assets/*.js', // All JS files (if you add any JS in your theme)
  ],
  theme: {
    fontFamily: {
      'primary': ['Figtree', 'sans-serif'],
    },
    screens: {
      'mb': '375px',
      'xs': '576px',
      'lg': '990px',
      'xl': '1280px',
      '3xl': '1800px',
      '4xl': '1920px',
      '6xl': '2500px'
    },
    extend: {
      colors: {
        pink: '#FF3EAD',
        orange: '#E45825',
        pinkorange: '#E74639',
        lightorange: '#FEA30C',
        yellow: '#FFC107',
        skyblue: '#98E1FF'
      },
      letterSpacing: {
        '50': '0.5em'
      },
      minHeight: {
        'screen-plus-120': 'calc(100vh + 120px)',
      },
    },
  },
  plugins: [
    // function({ addBase }) {
    //   addBase({
    //     '*': {
    //       'letter-spacing': 'calc(0.05 * 1em)',
    //     },
    //   });
    // },
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-gutter-overlay': { scrollbarGutter: 'overlay' },
      });
    },
  ],
};
