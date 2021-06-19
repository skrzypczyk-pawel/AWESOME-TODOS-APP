import React from "react";

import { StyleSheet, css } from "aphrodite";
import { COLORS } from "../styles/palette";

const Footer = () => {
  return (
    <footer className={css(styles.footer)}>
      <p>Footer</p>
    </footer>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: COLORS.grayBlue,
    textAlign: "center",
    color: COLORS.white,
  },
});

export default Footer;
