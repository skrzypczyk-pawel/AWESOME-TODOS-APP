import React from "react";

import { StyleSheet, css } from "aphrodite";
import { FC } from "react";
import ScreenWrapper from "components/ScreenWrapper";
import { colors } from "styles/palette";

interface Props {}

const HomeScreen: FC<Props> = () => {
  return (
    <ScreenWrapper>
      <div className={css(styles.homeScreen)}>
        <h3>home screen</h3>
      </div>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    flexGrow: 1,
    backgroundColor: colors.white,
    textAlign: "center",
    textTransform: "uppercase",
    color: colors.grayBlue,
  },
});

export default HomeScreen;
