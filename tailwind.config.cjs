const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "embarkspace0": "#100E23",
        "embarkspace1": "#1E1C31",
        "embarkspace2": "#2D2B40",
        "embarkspace3": "#3E3859",
        "embarkspace4": "#585273",
        "embarkred": "#585273",
        "embarkreddark": "#F02E6E",
        "embarkgreen": "#A1EFD3",
        "embarkgreendark": "#7FE9C3",
        "embarkyellow": "#FFE6B3",
        "embarkyellowdark": "#F2B482",
        "embarkblue": "#91DDFF",
        "embarkbluedark": "#78A8FF",
        "embarkpurple": "#D4BFFF",
        "embarkpurpledark": "#7676FF",
        "embarkteal": "#ABF8F7",
        "embarktealdark": "#63F2F1",
      }
    },
  },
  plugins: [],
};
