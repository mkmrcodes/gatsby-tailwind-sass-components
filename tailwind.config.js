module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Oswald'],
      body: ['Rajdhani'],
      extra: ['Poppins'],
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5798B3',
          hover: '#467A8F',
          active: '#345B6B',
          disabled: '#eef5f7',
          text: '#4A4A68',
        },
        secondary: {
          DEFAULT: '#6557B3',
          hover: '#51468F',
          active: '#3D346B',
          disabled: '#E0DDF0',
          text: '#8C8CA1',
        },
        tertiary: {
          DEFAULT: '#B35777',
          hover: '#8F465F',
          active: '#6B3447',
          disabled: '#E8CDD6',
        },
        dark: '#0E0E2C',
        success: '#4BB543',
        error: '#B00020',
        accent: '#ECF1F4',
        light: '#FAFCFE',
        head: '#E53E29',
        nightblue: '#2991e5',
      },
      boxShadow: {
        inside: 'inset 0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
