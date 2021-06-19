import React from "react";

import { StyleSheet, css } from "aphrodite";
import { COLORS } from "../styles/palette";

const Header = () => {
  return (
    <header className={css(styles.header)}>
      <h1 className={css(styles.title)}>Awesome todos app</h1>
      <h2 className={css(styles.subtitle)}>- main list</h2>
    </header>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: COLORS.grayBlue,
  },
  title: {
    textTransform: "uppercase",
    textAlign: "center",
    color: COLORS.skyBlue,
  },
  subtitle: {
    marginRight: 30,
    textAlign: "right",
    color: COLORS.lightBlue,
  },
});

export default Header;
