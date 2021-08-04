import React, { FC, HTMLAttributes } from "react";
import { css, StyleSheet } from "aphrodite";
import { colors, typography } from "src/styles";

interface Props {
  error?: boolean;
  style?: HTMLAttributes<HTMLParagraphElement>;
}

export const StyledText: FC<Props> = ({ children, error, style }) => {
  return (
    <p
      className={css(
        typography.body1,
        styles.text,
        error && (typography.altBody1, styles.errorText),
        style
      )}
    >
      {children}
    </p>
  );
};

const styles = StyleSheet.create({
  text: {
    textTransform: "none",
  },
  errorText: {
    marginTop: 3,
    color: colors.white,
  },
});
