import React, { FC, HTMLAttributes } from "react";
import { css, StyleSheet } from "aphrodite";
import { colors } from "src/styles";
import { IconName } from "src/types";
import { Icon } from "./Icon/Icon";

export type IconButtonsNames = "education" | "homework" | "health";
interface Props {
  onClick: () => void;
  iconName: IconName;
  iconStyle?: HTMLAttributes<HTMLButtonElement>;
  style?: HTMLAttributes<HTMLButtonElement>;
  title?: string;
  isSelected?: boolean;
  type?: "button" | "submit" | "reset";
  iconSize?: number;
  iconColor?: string;
}

export const CircleIconButton: FC<Props> = ({
  onClick,
  iconName,
  iconStyle,
  style,
  title,
  isSelected,
  type = "button",
  iconSize,
  iconColor,
}) => {
  return (
    <button
      type={type}
      className={css(styles.button, style, isSelected && styles.selected)}
      onClick={onClick}
      title={title}
    >
      <div className={css(styles.icon, iconStyle)}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </div>
    </button>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.5s",
    position: "absolute",
    width: 45,
    height: 45,
    cursor: "pointer",
    borderRadius: "100%",
    backgroundColor: colors.transparent,
    ":hover": {},
  },
  icon: {
    margin: 3,
  },
  selected: {
    border: `3px solid ${colors.blue2}`,
    ":hover": {
      border: `3px solid ${colors.blue3}`,
    },
  },
});
