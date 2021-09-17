module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: { min: "0px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px" },
        xl: { min: "1280px" },
        "2xl": { min: "1536px" },
      },

      backgroundImage: (theme) => ({
        "logo": "url('../../assets/landingpics/brycelogo.jpg')",
      }),

      spacing: {
        '22' : '5.5rem',
        '91' : '22rem',
        '95.8' : '23.5rem',
        '96.1' : '25.5rem',
        '96.5' : '28rem',
        '98' : '30rem',
        '99' : '35rem',
        '97': '40rem',
        '97.5' : '42rem',
        '99.5' : '43.5rem',
        '100' : '45rem',
      },

      fontFamily: {
        roboto: 'Roboto Slab',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
