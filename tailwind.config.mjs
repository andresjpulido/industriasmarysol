/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      one: "#F4FAF9",
      two: "#656E74",
      three: "#E1EEF4",
      four: "#88BFCD",
      five: "#F7CF46",
      six: "#FFF",
      seven: "#f64d52",
      eight: "#2E6CB1",  
      nine: "#a7b9c3",
      ten: "#0b79a7",
    },
    fontFamily: {
      montserratblack: [
        "montserratblack",
        "Helvetica",
        "ui-sans-serif",
        "system-ui",
      ],
      montserratbold: [
        "montserratbold",
        "Helvetica",
        "ui-sans-serif",
        "system-ui",
      ],
      montserratlightitalic: [
        "montserratlightitalic",
        "Helvetica",
        "ui-sans-serif",
        "system-ui",
      ],
    },
    backgroundImage: {
      categorias: "url('/images/wave-4-bottom.svg')",
    },
  },

  plugins: [],
};
