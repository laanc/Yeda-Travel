/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          background: "#fefefe",
          primary: "#2d365d",
          secondary: "#2cbfcf",
        },
        fontFamily: {
          sans: ['Poppins', 'Roboto', 'Arial', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  