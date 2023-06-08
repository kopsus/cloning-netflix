/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundParents: "#111111",
        textHeader: "#DDDDDD",
        textRed: "#E50914",
        customBlue: "#181537",
        customBlack: "#00081D",
        input: "#D9D9D9",
      },
    },
  },
  plugins: [],
}
