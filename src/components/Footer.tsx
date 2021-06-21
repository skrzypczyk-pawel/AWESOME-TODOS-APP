import React, { FC } from "react";

import { StyleSheet, css } from "aphrodite";
import { colors } from "styles/palette";

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <footer className={css(styles.footer)}>
      <p>Footer</p>
    </footer>
  );
};
const styles = StyleSheet.create({
  footer: {
    backgroundColor: colors.grayBlue,
    textAlign: "center",
    color: colors.white,
  },
});

export default Footer;
