/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-700": "#465c50",
        "utility-bg": "#f7f7fb",
        "orange-500": "#e76b39",
        "gray-700": "#646d89",
        "orange-600": "#c14817",
        chocolate: "#db6130",
        "utility-white": "#fff",
        "gray-300": "#e4e6ed",
        "gray-400": "#d6d9e4",
        lightslategray: "#9aa1b9",
        "gray-900": "#2a2e3f",
        "gray-200": "#f1f2f6",
        "green-800": "#2f3e35",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        body1: "Inter",
        headline2: "'Noto Serif'",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      sm: "14px",
      "49xl": "68px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
