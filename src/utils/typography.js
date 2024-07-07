import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  googleFonts: [
    { name: "Libre Baskerville", styles: [400] },
    { name: "Roboto Regular", styles: [400] },
    { name: "Roboto Medium", styles: [500] },
  ],
})

export default typography
