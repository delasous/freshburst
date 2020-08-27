module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Hepta Slab', 'serif'],
      },
      colors: {
        primary: '#f7f7f7',
      },
      gridTemplateColumns: {
        'main': '250px 1fr 1fr',
      },
      gridTemplateRows: {
        '1': 'repeat(1, minmax(0, 1fr))',
        'main': '1fr 1fr minmax(50px, auto)  1fr 1fr',
      },
    },
  },
  variants: {},
  plugins: [],
}
