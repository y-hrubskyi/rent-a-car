export const theme = {
  colors: {
    white: "#fff",
    black: "#121417",
    gray: (alpha = 1) => `rgba(18, 20, 23, ${alpha})`,
    grayForInputs: (alpha = 1) => `rgba(138, 138, 137, ${alpha})`,
    whiteForInputs: "#f7f7fb",
    accent: "#3470ff",
    hover: "#0b44cd",
  },
  radii: {
    btn: "12px",
    img: "14px",
    select: "14px",
    modal: "24px",
  },
  transition: (prop = "") => `${prop} 250ms linear`,
  spacing: (value) => `${value * 2}px`,
};
