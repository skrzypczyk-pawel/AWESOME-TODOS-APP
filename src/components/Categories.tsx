import React, { FC } from "react";
import { css, StyleSheet } from "aphrodite";
import { colors } from "src/styles";

interface Props {}

export const Categories: FC<Props> = ({ children }) => {
  return <div className={css(styles.wrapCategories)}>{children}</div>;
};

const styles = StyleSheet.create({
  wrapCategories: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    margin: "0 auto",
    padding: 5,
    width: "120px",
    minHeight: "8vh",
    backgroundColor: colors.transparent,
  },
});
