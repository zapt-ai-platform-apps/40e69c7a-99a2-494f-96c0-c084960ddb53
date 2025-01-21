export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f9ff',
          100: '#eef1ff',
          200: '#dde2ff',
          300: '#c3caff',
          400: '#9fa9ff',
          500: '#7986ff',
          600: '#5464ff',
          700: '#2f43ff',
          800: '#0a23ff',
          900: '#0011d6',
        },
      },
      fontFamily: {
        heading: ['"Figtree"', 'system-ui'],
        body: ['"Inter"', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
};