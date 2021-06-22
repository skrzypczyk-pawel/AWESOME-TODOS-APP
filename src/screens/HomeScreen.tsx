import React, { FC, useState } from "react";

import ScreenWrapper from "components/ScreenWrapper";
import StyledInput from "components/StyledInput";

import { StyleSheet, css } from "aphrodite";
import { colors } from "styles/palette";
import { i18n } from "locale";

interface Props {}

const HomeScreen: FC<Props> = () => {
  const [inputValue1, setInputValue1] = useState<string>("");
  const [inputValue2, setInputValue2] = useState<string>("");
  return (
    <ScreenWrapper>
      <div className={css(styles.homeScreen)}>
        <h3>{i18n.t("header:title")}</h3>
        <StyledInput
          value={inputValue1}
          onChange={(event) => setInputValue1(event.target.value)}
          placeholder="Search..."
        />
        <StyledInput
          value={inputValue2}
          onChange={(event) => setInputValue2(event.target.value)}
          placeholder="Error..."
          error="Error Text!!!"
        />
      </div>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    flexDirection: "column",
    alignItems: "stretch",
    display: "flex",
    flexGrow: 1,
    backgroundColor: colors.white,
    textAlign: "center",
    textTransform: "uppercase",
    color: colors.blue4,
  },
});

export default HomeScreen;
