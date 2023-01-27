/** @type {import('tailwindcss').Config} */

const colors = {
  black: {
    DEFAULT: "#242935",
    50: "#E7E9EE",
    100: "#CED3DE",
    200: "#9BA4BB",
    300: "#6A799A",
    400: "#465067",
    500: "#242935",
    600: "#1D212B",
    700: "#171A21",
    800: "#0E1015",
    900: "#08090C"
  },
  purple: {
    DEFAULT: "#3e1d53",
    50: "#EDE1F4",
    100: "#DBC3EA",
    200: "#B98AD6",
    300: "#954DC1",
    400: "#6C3290",
    500: "#3E1D53",
    600: "#331844",
    700: "#251131",
    800: "#1A0C22",
    900: "#0B050F"

  },
  orange: {
    DEFAULT: "#87300d",
    50: "#FCE7DE",
    100: "#F9CFBE",
    200: "#F29E7D",
    300: "#EC6A37",
    400: "#C84613",
    500: "#87300D",
    600: "#6B260A",
    700: "#4F1C08",
    800: "#381405",
    900: "#1C0A03"
  },
  green: {
    DEFAULT: "#084c41",
    50: "#DAFBF6",
    100: "#B1F7EB",
    200: "#67EFD8",
    300: "#18E7C4",
    400: "#109882",
    500: "#084C41",
    600: "#063C33",
    700: "#052E27",
    800: "#03201B",
    900: "#010E0C"
  },  
  blue: {
    DEFAULT: "#10365c",
    50: "#DCEBF9",
    100: "#B9D6F3",
    200: "#74ADE7",
    300: "#3387DC",
    400: "#1C5EA1",
    500: "#10365C",
    600: "#0D2B4A",
    700: "#0A2138",
    800: "#061423",
    900: "#030A11"
  },
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        body: "#F3EEED",
      },
    },
    fontFamily: {
      display: ["Roboto"],
      body: ['"Roboto"'],
    },
    fontSize: {
      sm: "0.95rem",
      base: "1.15rem",
      lg: "1.25rem",
      xl: "1.35rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    screens: {
      lg: "1200px",
      xl: "1200px",
      "2xl": "1200px",
    },
  },
  important: "body",
};
