export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#131315",
        surface: "#131315",

        "surface-container": "#201f21",
        "surface-container-high": "#2a2a2c",
        "surface-container-highest": "#353437",

        primary: "#a4e6ff",
        "primary-container": "#00d1ff",
        "on-primary": "#003543",
        "on-primary-container": "#00566a",

        secondary: "#ecb2ff",
        "secondary-container": "#cf5cff",

        tertiary: "#00fc92",
        "tertiary-container": "#00dc7f",

        error: "#ffb4ab",

        outline: "#859399",
        "outline-variant": "#3c494e",

        "on-surface": "#e5e1e4",
        "on-background": "#e5e1e4",
      },

      fontFamily: {
        sans: ["Inter", "system-ui"],
        heading: ["Space Grotesk"],
      },

      borderRadius: {
        xl: "0.5rem",
      },
    },
  },
  plugins: [],
}