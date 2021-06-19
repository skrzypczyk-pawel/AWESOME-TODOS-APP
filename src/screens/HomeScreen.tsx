import React from "react";

import { StyleSheet, css } from "aphrodite";
import { COLORS } from "../styles/palette";

const HomeScreen = () => {
  return (
    <div className={css(styles.homeScreen)}>
      <h3>home screen</h3>
    </div>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
    textAlign: "center",
    textTransform: "uppercase",
    color: COLORS.grayBlue,
  },
});

export default HomeScreen;
