/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#55E5A4",
          seaGreen: "#47D495",
          dark: "#26313F",
          darkest: "#151C25",
          light: "#E8ECF2",
          lightshade: "#D9D9D9",
          whisperGray: "#E3E3E3",
        },
        secondary: {
          darkGrayishBrown: "#686565",
          gray: "#8C8C8C",
          darkGray: "#A9A9A9",
          aliceBlue: "#F0F4F8",
          deepPurple: "#2E0249",
          blueGray: "#5598EE",
          lightSlateGray: "#77808B",
          lightGray: "#EEEEEE",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
