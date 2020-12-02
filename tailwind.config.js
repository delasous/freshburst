module.exports = {
  purge: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'burst-exp': "url('/explode-crop-2.gif')"
      }),
      fontFamily: {
        'sans': ['Hepta Slab', 'serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'shrikhand': ['Shrikhand', 'cursive']
      },
      fontWeight: {
        'extralight': '200',
        'semibold': '600',
      },
      colors: {
        primary: '#f7f7f7',
        secondary: '#2a2a2a',
        blue: '#3332cc',
      },
      textColor: {
        secondary: '#2a2a2a',
      },
      lineHeight: {
        '12': '3rem',
      },
      gridTemplateColumns: {
        'main': '320px 1fr 1fr',
        'main-index': '320px repeat(4, 1fr) 2fr', //for centered index. looks bad w/ post. but both use same root Layout
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
        'xsm': {'min': '240px', 'max': '950px'},
        'md': '950px',
      },
    },
  },
  variants: {
      backgroundClip: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
