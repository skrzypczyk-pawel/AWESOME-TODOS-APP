import React, { FC, HTMLAttributes } from "react";
import { css, StyleSheet } from "aphrodite";
import { colors, typography } from "styles";

interface Props {
  error?: boolean;
  style?: HTMLAttributes<HTMLParagraphElement>;
}

const StyledText: FC<Props> = ({ children, error, style }) => {
  return (
    <p
      className={css(
        styles.text,
        style,
        typography.body1,
        error && styles.errorText
      )}
    >
      {children}
    </p>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
    textTransform: "none",
  },
  errorText: {
    marginTop: 3,
    fontFamily: "Ubuntu",
    color: colors.red1,
  },
});

export default StyledText;
