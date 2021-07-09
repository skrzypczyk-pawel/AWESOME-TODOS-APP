import React, { FC } from "react";
import { css, StyleSheet } from "aphrodite";
import { colors, getShadow, typography } from "src/styles";

interface Props {
  id: string;
}

export const SelectMenu: FC<Props> = ({ children, id }) => {
  return (
    <select id={id} className={css(styles.selectMenu, typography.body2)}>
      {children}
    </select>
  );
};

const styles = StyleSheet.create({
  selectMenu: {
    position: "relative",
    width: "20vw",
    height: "5vh",
    lineHeight: "5vh",
    transition: "0.5s",
    margin: 2,
    boxShadow: getShadow(colors.blue4),
    border: `1px solid ${colors.white}`,
    outline: "none",
    borderRadius: 5,
    backgroundColor: colors.white,
  },
});
