import React from "react";
import HomeScreen from "../screens/HomeScreen";
import Header from "./Header";
import Footer from "./Footer";

import { StyleSheet, css } from "aphrodite";
import { COLORS } from "../styles/palette";

const ScreenWrapper = () => {
  return (
    <main className={css(styles.wrapper)}>
      <Header />
      <HomeScreen />
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
    boxShadow: `0px 0px 15px ${COLORS.grayBlue}`,
    width: "60vw",
    minWidth: "600px",
    maxWidth: "800px",
    minHeight: "100vh",
    backgroundColor: COLORS.background,
  },
});

export default ScreenWrapper;
