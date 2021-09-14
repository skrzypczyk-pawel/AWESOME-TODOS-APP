import React, { FC } from "react";
import { css, StyleSheet } from "aphrodite";
import { colors } from "src/styles";

interface Props {}

export const FinderBar: FC<Props> = ({ children }) => {
  return <div className={css(styles.bar)}>{children}</div>;
};

const styles = StyleSheet.create({
  bar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: colors.blue3,
    width: "100%",
    height: "9vh",
  },
});
