module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        gradientShift: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        textGlow: {
          "0%,100%": { filter: "drop-shadow(0 0 10px #fff)" },
          "50%": { filter: "drop-shadow(0 0 25px #ff0)" },
        },
        fade: { "0%": { opacity: 1 }, "100%": { opacity: 0 } },
        ripple: {
          "0%": { transform: "translate(-50%, -50%) scale(0)", opacity: 0.6 },
          "80%": { transform: "translate(-50%, -50%) scale(1.5)", opacity: 0 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        gradientShift: "gradientShift 20s ease infinite",
        textGlow: "textGlow 2s ease-in-out infinite",
        fade: "fade 0.5s linear forwards",
        ripple: "ripple 1.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
