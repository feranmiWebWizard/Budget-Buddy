/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        "blue-1": "#05386b",
        "green-1": "#379683",
        'green-2':  '#5cdb95',
        "green-3": "#8ee4af",
        "cream-1": "#edf5e1",
      },
    },
  },
  plugins: [],
}

