import React, { FC, HTMLAttributes } from "react";

import { IconName } from "src/types";

import { css, StyleSheet } from "aphrodite";
import { colors } from "src/styles";
import { Icon } from "./Icon/Icon";

interface Props {
  onClick: () => void;
  iconName: IconName;
  iconStyle?: HTMLAttributes<HTMLButtonElement>;
  style?: HTMLAttributes<HTMLButtonElement>;
  title?: string;
}

export const Button: FC<Props> = ({
  onClick,
  iconName,
  iconStyle,
  style,
  title,
}) => {
  return (
    <button
      type="button"
      className={css(styles.button, style)}
      onClick={onClick}
      title={title}
    >
      <div className={css(styles.icon, iconStyle)}>
        <Icon name={iconName} />
      </div>
    </button>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    transition: "0.5s",
    border: `2px solid ${colors.blue2}`,
    borderRadius: "100%",
    width: 60,
    height: 60,
    padding: "3px",
    backgroundColor: colors.white,
    cursor: "pointer",
    textAlign: "center",
    ":hover": {
      backgroundColor: colors.blue2,
    },
  },
  icon: {
    margin: 3,
  },
});
