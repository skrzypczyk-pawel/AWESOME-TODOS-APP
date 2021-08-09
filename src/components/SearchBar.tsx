import React, { ChangeEventHandler, FC } from "react";
import { StyleSheet } from "aphrodite";
import { i18n } from "src/locale";
import { colors, getShadow, typography } from "src/styles";

import { StyledInput } from "./StyledInput";

interface Props {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const SearchBar: FC<Props> = ({ onChange }) => {
  return (
    <>
      <StyledInput
        onChange={onChange}
        placeholder={i18n.t("textAreaPlaceholder:search")}
        style={styles.input}
        styleText={typography.altBody2}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    position: "relative",
    left: "-90px",
    transition: "0.5s",
    margin: "10px 2px 2px",
    paddingLeft: "10px",
    boxShadow: getShadow(colors.blue4),
    border: `1px solid ${colors.white}`,
    width: "20vw",
    height: "5vh",
    lineHeight: "5vh",
    fontSize: "3vh",
    outline: "none",
    borderRadius: 4,
    backgroundColor: colors.white,
  },
});
