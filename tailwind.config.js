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
            100: "#0085ff",
            200: "#69b4ff",
            300: "#e0ffff",
          },
          accent: {
            100: "#006fff",
            200: "#e1ffff",
          },
          text: {
            100: "#FFFFFF",
            200: "#9e9e9e",
          },
          bg: {
            100: "#1E1E1E",
            200: "#2d2d2d",
            300: "#454545",
          },
        },
      },
    },
    plugins: [],
    darkMode: "class",
  };
  