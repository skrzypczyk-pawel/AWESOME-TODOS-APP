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
        typography.body1,
        styles.text,
        style,
        error && (styles.errorText, typography.altBody1)
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
    color: colors.red1,
  },
});

export default StyledText;
