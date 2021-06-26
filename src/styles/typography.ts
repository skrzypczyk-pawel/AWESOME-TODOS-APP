import { StyleSheet } from "aphrodite";

export const fonts = {
  roboto: "Roboto",
  ubuntu: "Ubuntu",
};

export const typography = StyleSheet.create({
  body1: {
    fontSize: 12,
    lineHeight: "16px",
    fontFamily: fonts.roboto,
  },
  altBody1: {
    fontSize: 12,
    lineHeight: "16px",
    fontFamily: fonts.ubuntu,
  },
});
