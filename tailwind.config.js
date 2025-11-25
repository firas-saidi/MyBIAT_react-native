/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#003D8F",
        secondary: "#FBB600",
        dark: "#1C1C1C",
        light: "#F5F6FA",
        card: "#FFFFFF",
      },
    },
  },
  plugins: [],
}
