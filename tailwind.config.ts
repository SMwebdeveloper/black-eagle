/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "auth-img": "url('/assets/images/auth-page.jpg')",
      },
    },
    colors: {
      lightColor: "#f8f8f8",
      blakc: "#000",
      darkColor: "#34495E",
      blue: "#368DE7",
      red: "#E32636",
      transparent: "transparent",
      gray: "#9999",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
  },
  plugins: [],
};
