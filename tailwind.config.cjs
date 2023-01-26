/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        proxima: ["Proxima Nova", "sans-serif"]
      },
      width: {
        1300: "81.25rem",
        900: "56.25rem",
        700: "43.75rem",
        560: "35rem",
        460: "28.75rem",
        380: "23.75rem",
        330: "20.625rem",
      },
      height: {
        731: "45.703rem",
        506: "31.641rem",
        394: "24.609rem",
        315: "19.688rem",
        259: "16.172rem",
        214: "13.359rem",
        186: "11.602rem",
      },
      screens: {
        "c-xxs": "400px",
        "c-xs": "540px",
        "c-sm": "640px",
        "c-md": "900px",
        "c-lg": "1000px",
        "c-xl": "1224px",
        "c-xxl": "1750px",
      },
      maxWidth: {
        "8xl": "113rem",
      },
      top: {
        "100p": "100%"
      },
      backgroundImage: {
        'purple-wave': "url('/images/layered-waves-haikei-pink.svg')",
        'sky-wave': "url('/images/layered-waves-haikei-sky.svg')",
        'beach-wave': "url('/images/layered-waves-haikei-beach.svg')",
        'brown-wave': "url('/images/layered-waves-haikei-brown.svg')"

      },
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        main: {
          primary: '#55423d',
          secondary: '#ffc0ad',
          header: '#fffffe',
          pg: '#fff3ec',
          txt: '#271c19',
          hlt: '#e78fb3',
        }
      },
    },
  },
  plugins: [],
};
