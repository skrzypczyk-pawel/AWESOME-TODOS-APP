import React, { FC, useState } from "react";

import ScreenWrapper from "components/ScreenWrapper";
import StyledInput from "components/StyledInput";

import { StyleSheet, css } from "aphrodite";
import { colors } from "styles/palette";
import { i18n } from "locale";

interface Props {}

const HomeScreen: FC<Props> = () => {
  const [inputValue1, setInputValue1] = useState<string>("");

  const handleInputValue = (value: string): void => {
    setInputValue1(value);
  };

  return (
    <ScreenWrapper>
      <div className={css(styles.homeScreen)}>
        <h3>{i18n.t("header:title")}</h3>
        <StyledInput
          value={inputValue1}
          onChange={handleInputValue}
          placeholder={i18n.t("common:search")}
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
