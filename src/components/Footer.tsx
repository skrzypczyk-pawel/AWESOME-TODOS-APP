import React, { FC } from "react";

import { StyleSheet, css } from "aphrodite";
import { colors } from "styles";

interface Props {}

export const Footer: FC<Props> = () => {
  return (
    <footer className={css(styles.footer)}>
      <p>Footer</p>
    </footer>
  );
};
const styles = StyleSheet.create({
  footer: {
    backgroundColor: colors.blue4,
    textAlign: "center",
    color: colors.white,
  },
});
