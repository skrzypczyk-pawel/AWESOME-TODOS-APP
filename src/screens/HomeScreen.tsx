import React, { FC, useState } from "react";

import {
  TodoList,
  ScreenWrapper,
  StyledInput,
  TextArea,
  StyledText,
} from "src/components";
import { StyleSheet, css } from "aphrodite";
import { colors } from "src/styles";
import { i18n } from "src/locale";

interface Props {}

const HomeScreen: FC<Props> = () => {
  const [inputValue1, setInputValue1] = useState<string>("");
  const [textareaValue1, setTextareaValue1] = useState<string>("");

  const handleInputValue = (value: string): void => {
    setInputValue1(value);
  };
  const handleTextareaValue = (value: string): void => {
    setTextareaValue1(value);
  };

  return (
    <ScreenWrapper>
      <div className={css(styles.homeScreen)}>
        <h3>{i18n.t("header:title")}</h3>
        <StyledInput
          value={inputValue1}
          onChange={handleInputValue}
          placeholder={i18n.t("textAreaPlaceholder:search")}
        />
        <TextArea
          value={textareaValue1}
          onChange={handleTextareaValue}
          placeholder={i18n.t("textAreaPlaceholder:type")}
          error={i18n.t("test:error")}
        />
        <StyledText style={styles.testText}>{i18n.t("test:lorem")}</StyledText>
        <TodoList />
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
  testText: {
    margin: "20px 10vw",
  },
});

export default HomeScreen;
