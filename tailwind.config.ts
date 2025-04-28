// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        slideIn: "slideIn 0.5s ease-in-out",
        slideOut: "slideOut 0.5s ease-in-out",
      },
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideOut: {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
