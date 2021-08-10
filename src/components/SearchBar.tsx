import React, { ChangeEventHandler, FC, RefObject } from "react";
import { StyleSheet } from "aphrodite";
import { i18n } from "src/locale";
import { colors, getShadow, typography } from "src/styles";

import { StyledInput } from "./StyledInput";

interface Props {
  id?: string;
  reference?: RefObject<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const SearchBar: FC<Props> = ({ id, reference, onChange }) => {
  return (
    <StyledInput
      id={id}
      reference={reference}
      onChange={onChange}
      placeholder={i18n.t("textAreaPlaceholder:search")}
      style={styles.input}
      styleText={typography.altBody2}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    position: "relative",
    transition: "0.5s",
    marginRight: "10px",
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
