module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Hepta Slab', 'serif'],
      },
      colors: {
        primary: '#f7f7f7',
        secondary: '#2a2a2a',
        blue: '#3332cc',
      },
      gridTemplateColumns: {
        'main': '250px 1fr 1fr',
        'center': '1fr 1fr minmax(50px, auto)  1fr 1fr'
      },
      gridTemplateRows: {
        '1': 'repeat(1, minmax(0, 1fr))',
        'center': '1fr 1fr minmax(50px, auto)  1fr 1fr',
      },
      flex: {
        '2': '2 1 auto',
      },
      height: {
        '150': '150px',
        '110': '110px',
      },
      screens: {
        'xsm': {'min': '240px', 'max': '768px'},
      },
    },
  },
  variants: {},
  plugins: [],
}
