import React, { FC, HTMLAttributes } from "react";
import { css, StyleSheet } from "aphrodite";
import { colors, getShadow } from "src/styles";
import { IconName } from "src/types";
import { Icon } from "./Icon/Icon";
import { StyledText } from "./StyledText";

interface Props {
  onClick: () => void;
  iconName: IconName;
  text: string;
  iconStyle?: HTMLAttributes<HTMLButtonElement>;
  style?: HTMLAttributes<HTMLButtonElement>;
}

export const HoverButton: FC<Props> = ({
  onClick,
  iconName,
  iconStyle,
  style,
  text,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={css(styles.button, style)}
    >
      <div className={css(styles.icon, iconStyle)}>
        <Icon name={iconName} />
      </div>
      <StyledText>{text}</StyledText>
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
    boxShadow: getShadow(colors.blue6, -3, 3, 3),
    top: 0,
    right: "-70px",
    margin: 3,
    width: 110,
    height: 40,
    padding: "3px",
    backgroundColor: colors.transparent,
    cursor: "pointer",
    textAlign: "center",

    ":hover": {
      opacity: 0.8,
      transform: "translateX(-70px)",
      boxShadow: getShadow(colors.blue6, 0, 0, 4),
      backgroundColor: colors.blue2,
    },
  },
  icon: {
    margin: 3,
    width: "30px",
    height: "30px",
  },
});
