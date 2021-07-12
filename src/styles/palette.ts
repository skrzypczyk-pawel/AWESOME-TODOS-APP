export const colors = {
  black: "#000",
  blue1: "#2473BD",
  blue2: "#C4F9FF",
  blue3: "#154470",
  blue4: "#375570",
  blue5: "#2D92F0",
  blue6: "#77B7F2",
  green1: "#45D969",
  green2: "#67F099",
  lightBlue: "#48c8ef",
  red1: "#FF0005",
  red2: "#F56856",
  skin: "#FFDED1",
  transparentGrey: "rgba(100, 100, 100, 0.3)",
  transparent: "rgba(0, 0, 0, 0)",
  white: "#FFF",
  yellow: "#ECF230",
};
/** Get Shadow  colors.blue6, 3, 3, 5 */
export const getShadow = (
  color = colors.blue6,
  x = 3,
  y = 3,
  z = 5
): string => {
  return `${x}px ${y}px ${z}px ${color}`;
};
