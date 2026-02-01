/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      borderWidth: {
        10: "10px",
      },
      colors: {
        lightMagenta: "hsl(293, 100%, 63%)",
        lightViolet: "hsl(264, 100%, 61%)",
        grayishViolet: "hsl(270, 20%, 90%)",
        lightGrayishViolet: "hsl(270, 20%, 96%)",
        veryDarkDesaturatedViolet: "hsl(271, 36%, 24%)",
        veryLightMagenta: "hsl(289, 100%, 72%)",
        paleViolet: "hsl(276, 100%, 81%)",
        moderateViolet: "hsl(276, 55%, 52%)",
        desaturatedDarkViolet: "hsl(271, 15%, 43%)",
        grayishBlue: "hsl(206, 6%, 79%)",
        darkGrayishViolet: "hsl(270, 7%, 64%)",
      },
      fontSize: {
        xxs: "0.5rem",
      },
      maxWidth: {
        32: "8rem",
      },
    },
  },
  plugins: [],
};
