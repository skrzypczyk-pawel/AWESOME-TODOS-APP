import React, { FC, HTMLAttributes, useState } from "react";

import { StyleSheet, css } from "aphrodite";
import { colors } from "styles/palette";

interface Props {
  onChange: (_value: string) => void;
  value: string;
  error?: string;
  focused?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  label?: string;
  placeholder?: string;
  style?: HTMLAttributes<HTMLInputElement>;
}

const TextArea: FC<Props> = ({
  error,
  focused = false,
  label,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  style,
  value,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(focused);

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };
  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  return (
    <>
      <label htmlFor={label}>
        {label}
        <textarea
          id={label}
          onFocus={handleFocus}
          onChange={(event) => onChange(event.target.value)}
          onBlur={handleBlur}
          className={css(
            styles.textarea,
            isFocused && styles.focused,
            style,
            !!error && styles.error
          )}
          placeholder={placeholder}
          value={value}
        />
      </label>
      {!!error && <p className={css(styles.errorText)}>{error}</p>}
    </>
  );
};
const styles = StyleSheet.create({
  textarea: {
    transition: "0.1s",
    margin: "10px auto",
    boxShadow: `3px 3px 5px ${colors.blue4}`,
    border: `1px solid ${colors.white}`,
    outline: "none",
    borderRadius: 5,
    backgroundColor: colors.white,
    color: colors.black1,
  },
  focused: {
    ":focus": {
      boxShadow: `3px 3px 5px ${colors.blue6}`,
      backgroundColor: colors.white,
      color: colors.blue1,
    },
  },
  error: {
    boxShadow: `3px 3px 5px ${colors.red1}`,
    border: `1px solid ${colors.red2}`,
    backgroundColor: colors.red2,
    ":focus": {
      boxShadow: `3px 3px 5px ${colors.red1}`,
      backgroundColor: colors.skin,
      color: colors.red2,
    },
  },
  errorText: {
    marginTop: 3,
    fontSize: 12,
    textTransform: "none",
    color: colors.red1,
  },
});

export default TextArea;
