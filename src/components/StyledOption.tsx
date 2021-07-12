import React, { FC } from "react";
import { css, StyleSheet } from "aphrodite";
import { colors, getShadow } from "src/styles";

interface Props {
  value: number | string;
  text: string;
}

export const StyledOption: FC<Props> = ({ value, text }) => {
  return (
    <option value={value} className={css(styles.select)}>
      {text}
    </option>
  );
};

const styles = StyleSheet.create({
  select: {
    backgroundColor: colors.white,
    boxShadow: getShadow(colors.blue4),
  },
});
