import React, { FC } from "react";

import ScreenWrapper from "components/ScreenWrapper";
import StyledInput from "components/StyledInput";

import { StyleSheet, css } from "aphrodite";
import { colors } from "styles/palette";
import { i18n } from "locale";

interface Props {}

const HomeScreen: FC<Props> = () => {
  return (
    <ScreenWrapper>
      <div className={css(styles.homeScreen)}>
        <h3>{i18n.t("header:title")}</h3>
        <StyledInput value="" placeholder="Search..." />
        <StyledInput value="" placeholder="Error..." error="Error Text!!!" />
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
