import { StyleSheet } from "aphrodite";

export const fonts = {
  roboto: "Roboto",
  ubuntu: "Ubuntu",
};

export const typography = StyleSheet.create({
  body1: {
    fontSize: 14,
    lineHeight: "16px",
    fontFamily: fonts.roboto,
  },
  altBody1: {
    fontSize: 14,
    lineHeight: "16px",
    fontFamily: fonts.ubuntu,
  },
  body2: {
    fontSize: 20,
    lineHeight: "24px",
    fontFamily: fonts.roboto,
  },
  altBody2: {
    fontSize: 20,
    lineHeight: "24px",
    fontFamily: fonts.ubuntu,
  },
});
