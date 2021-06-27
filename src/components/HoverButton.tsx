import React, { FC, HTMLAttributes, ReactElement } from "react";

import { css, StyleSheet } from "aphrodite";
import { i18n } from "src/locale";
import { colors } from "src/styles";
import { StyledText } from "./StyledText";

interface Props {
  onClick: () => void;
  icon: ReactElement;
  iconStyle?: HTMLAttributes<HTMLButtonElement>;
  style?: HTMLAttributes<HTMLButtonElement>;
}

export const HoverButton: FC<Props> = ({ onClick, icon, iconStyle, style }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={css(styles.button, style)}
    >
      <div className={css(styles.icon, iconStyle)}>{icon}</div>
      <StyledText>{i18n.t("todo:newEntry")}</StyledText>
    </button>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    transition: "0.5s",
    boxShadow: `-3px 3px 3px ${colors.blue6}`,
    border: `0px solid ${colors.white}`,
    width: 50,
    height: 50,
    padding: "3px",
    backgroundColor: colors.transparent,
    cursor: "pointer",
    textAlign: "center",

    ":hover": {
      opacity: 0.8,
      transform: "translateX(-70px)",
      boxShadow: `5px -5px 3px ${colors.blue6}`,
      backgroundColor: colors.blue2,
    },
  },
  icon: {
    margin: 3,
    width: "30px",
    height: "30px",
  },
});
