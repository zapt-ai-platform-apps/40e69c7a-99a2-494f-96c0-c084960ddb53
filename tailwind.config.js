export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff0f3',
          100: '#ffccd7',
          200: '#ffa9bd',
          300: '#ff85a3',
          400: '#ff6289',
          500: '#ff3e70',
          600: '#cc3158',
          700: '#992340',
          800: '#661628',
          900: '#330a14',
        },
        secondary: {
          50: '#ebf3ff',
          100: '#d7e7ff',
          200: '#abcfff',
          300: '#7fb8ff',
          400: '#539fff',
          500: '#2788ff',
          600: '#0069cc',
          700: '#004f99',
          800: '#003566',
          900: '#001a33',
        },
        accent: {
          50: '#f7fff0',
          100: '#ebffd8',
          200: '#d5ffab',
          300: '#c0ff7f',
          400: '#aaff52',
          500: '#94ff26',
          600: '#77cc1f',
          700: '#599918',
          800: '#3c660f',
          900: '#1f3307',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      spacing: {
        '5.5': '1.375rem',
      }
    },
  },
  plugins: [],
};