import React, { FC } from "react";
import { css, StyleSheet } from "aphrodite";
import { colors } from "styles/palette";
import Footer from "./Footer";
import Header from "./Header";

interface Props {}

const ScreenWrapper: FC<Props> = ({ children }) => {
  return (
    <main className={css(styles.wrapper)}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignItems: "stretch",
    display: "flex",
    margin: "0 auto",
    boxShadow: `0px 0px 15px ${colors.blue4}`,
    width: "60vw",
    minWidth: "600px",
    maxWidth: "800px",
    minHeight: "100vh",
    backgroundColor: colors.white,
  },
});

export default ScreenWrapper;
