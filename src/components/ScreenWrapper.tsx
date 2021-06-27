import React, { FC } from "react";
import { css, StyleSheet } from "aphrodite";
import { colors } from "src/styles";

import { PlusIcon } from "src/assets/icons";

import { i18n } from "src/locale";
import { HoverButton } from "./HoverButton";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface Props {}

export const ScreenWrapper: FC<Props> = ({ children }) => {
  const handleClick = (): void => {
    console.log("it works!!!");
  };

  return (
    <main className={css(styles.wrapper)}>
      <Header subtitle={i18n.t("header:subtitle")} />
      <HoverButton
        onClick={handleClick}
        icon={<PlusIcon />}
        style={styles.button}
      />
      {children}
      <Footer />
    </main>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    flexDirection: "column",
    alignItems: "stretch",
    display: "flex",
    overflow: "hidden",
    margin: "0 auto",
    boxShadow: `0px 0px 15px ${colors.blue4}`,
    width: "60vw",
    minWidth: "400px",
    maxWidth: "800px",
    minHeight: "100vh",
    backgroundColor: colors.white,
  },
  button: {
    position: "absolute",
    top: "30vh",
    right: "-70px",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    transition: "0.5s",
    border: `0px solid ${colors.white}`,
    width: 110,
    height: 40,
    padding: "3px",
    backgroundColor: colors.transparent,
    cursor: "pointer",
    textAlign: "center",

    ":hover": {
      opacity: 0.8,
      transform: "translateX(-70px)",
      boxShadow: `0px 0px 4px ${colors.blue6}`,
      backgroundColor: colors.blue2,
    },
  },
});
