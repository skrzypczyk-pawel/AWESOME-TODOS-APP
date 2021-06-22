import React, { FC } from "react";

import { StyleSheet, css } from "aphrodite";
import { colors } from "styles/palette";

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
    backgroundColor: colors.blue4,
  },
  title: {
    textTransform: "uppercase",
    textAlign: "center",
    color: colors.blue6,
  },
  subtitle: {
    marginRight: 30,
    textAlign: "right",
    color: colors.blue5,
  },
});

export default Header;
