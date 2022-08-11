module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#ff014f",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          resume: "red",
          "base-100": "#ffffff",
        },
      }, {
        dark: {
          primary: "#ff014f",
          secondary: "#F000B8",
          accent: "#37CDBE",
          neutral: "#3D4451",
          "base-100": "#2A303C",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      }
    ],
  },
  plugins: [require("daisyui")],
}