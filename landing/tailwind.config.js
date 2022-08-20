const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1700px",
      },
      fontFamily: {
        sans: ["Public Sans", ...defaultTheme.fontFamily.sans],
        // freXWideReg: ["freXWideReg", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primaryLight: "#0E1012",
        primary: "#0E1012",
        primaryDark: "#0E1012",
        background: "#0E1012",
        offwhite: "#CDD3DC",
        current: "currentColor",
        primary: {
          "light": "#64C7FF",
          "default": "#478BC9",
        },
      },
    },
  },
};
