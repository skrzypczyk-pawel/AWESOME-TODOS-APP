import React from "react";

import { StyleSheet, css } from "aphrodite";
import { colors } from "styles/palette";
import { FC } from "react";

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
