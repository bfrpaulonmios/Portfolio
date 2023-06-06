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
            100: "#FFFFFF",
            200: "#e0e0e0",
          },
          bg: {
            100: "#1A1A1A",
            200: "#292929",
            300: "#404040",
          },
        },
      },
    },
    plugins: [],
    darkMode: "class",
  };
  