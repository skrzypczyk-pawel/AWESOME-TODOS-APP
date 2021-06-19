import React from "react";

import { StyleSheet, css } from "aphrodite";
import { colors } from "styles/palette";
import { FC } from "react";

interface Props {}

const Header: FC<Props> = () => {
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
    backgroundColor: colors.grayBlue,
  },
  title: {
    textTransform: "uppercase",
    textAlign: "center",
    color: colors.skyBlue,
  },
  subtitle: {
    marginRight: 30,
    textAlign: "right",
    color: colors.lightBlue,
  },
});

export default Header;
