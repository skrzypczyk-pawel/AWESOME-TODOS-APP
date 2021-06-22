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
  type?: "submit" | "text" | "number";
}

const StyledInput: FC<Props> = ({
  error,
  focused = false,
  label,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  style,
  type = "text",
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
        <input
          id={label}
          onFocus={handleFocus}
          onChange={(event) => onChange(event.target.value)}
          onBlur={handleBlur}
          type={type}
          className={css(
            styles.input,
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
  input: {
    transition: "0.5s",
    margin: 2,
    boxShadow: `3px 3px 5px ${colors.blue4}`,
    border: `1px solid ${colors.white}`,
    outline: "none",
    borderRadius: 5,
    backgroundColor: colors.white,
  },
  focused: {
    ":focus": {
      boxShadow: `3px 3px 5px ${colors.blue6}`,
      backgroundColor: colors.blue2,
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

export default StyledInput;
