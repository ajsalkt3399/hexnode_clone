// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }




/// tailwind.config.js
const colors = require('./colors.config.js');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors, // Spread the custom colors from colors.config.js
      },
    },
  },
  plugins: [],
};
