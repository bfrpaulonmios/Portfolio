/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      // Ou se estiver usando o diretório `src`:
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            100: "#2C7A7B",
            200: "#5fa9aa",
            300: "#c3ffff",
          },
          accent: {
            100: "#6FB98F",
            200: "#065b37",
          },
          text: {
            100: "#333333",
            200: "#5c5c5c",
          },
          bg: {
            100: "#F0F5F9",
            200: "#e6ebef",
            300: "#bdc2c6",
          },
        },
      },
    },
    plugins: [],
    darkMode: "class",
  };
  