/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
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

      }
    },
  },
  plugins: [],
};
