import React, { FC, HTMLAttributes } from "react";

import { colors } from "src/styles";
import { PulseSpinner } from "react-spinners-kit";
import { StyleSheet, css } from "aphrodite";

export interface Props {
  color?: string;
  size?: number;
  style?: HTMLAttributes<HTMLDivElement>;
}

const Loader: FC<Props> = ({ color = colors.lightBlue, size = 30, style }) => {
  return (
    <div className={css(styles.loader, style)}>
      <PulseSpinner size={size} color={color} />
    </div>
  );
};

const styles = StyleSheet.create({
  loader: {
    margin: "10px auto",
  },
});

export default Loader;
