import React, { FC } from "react";

import { StyleSheet, css } from "aphrodite";
import { colors } from "styles";
import { i18n } from "locale";

interface Props {
  subtitle: string;
}

export const Header: FC<Props> = ({ subtitle }) => {
  return (
    <header className={css(styles.header)}>
      <h1 className={css(styles.title)}>{i18n.t("header:title")}</h1>
      <h2 className={css(styles.subtitle)}>{subtitle}</h2>
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
