import React, { FC, HTMLAttributes, ReactElement } from "react";

import { css, StyleSheet } from "aphrodite";
import { i18n } from "locale";
import { colors } from "styles";

interface Props {
  onClick: () => void;
  icon: ReactElement;
  iconStyle?: HTMLAttributes<HTMLButtonElement>;
  style?: HTMLAttributes<HTMLButtonElement>;
}

const HoverButton: FC<Props> = ({ onClick, icon, iconStyle, style }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={css(styles.button, style)}
    >
      <div className={css(styles.icon, iconStyle)}>{icon}</div>
      <p>{i18n.t("button:newEntry")}</p>
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
      boxShadow: `0px 0px 9px ${colors.blue6}`,
      backgroundColor: colors.blue2,
    },
  },
  icon: {
    margin: 3,
    width: "30px",
    height: "30px",
  },
});

export default HoverButton;
