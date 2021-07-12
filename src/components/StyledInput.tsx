import React, { ChangeEventHandler, FC, HTMLAttributes, useState } from "react";

import { StyleSheet, css } from "aphrodite";
import { colors, getShadow } from "src/styles";
import { StyledText } from "./StyledText";

interface Props {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  name?: string;
  error?: string | boolean;
  focused?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  label?: string;
  placeholder?: string;
  style?: HTMLAttributes<HTMLInputElement>;
  type?: "submit" | "text" | "number";
}

export const StyledInput: FC<Props> = ({
  error,
  focused = false,
  label,
  name,
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
          name={name}
          onFocus={handleFocus}
          onChange={onChange}
          onBlur={handleBlur}
          type={type}
          className={css(
            styles.input,
            style,
            isFocused && styles.focused,
            !!error && styles.error
          )}
          placeholder={placeholder}
          value={value}
        />
      </label>
      {!!error && <StyledText error>{error}</StyledText>}
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    transition: "0.5s",
    margin: 2,
    boxShadow: getShadow(colors.blue4),
    border: `1px solid ${colors.white}`,
    outline: "none",
    borderRadius: 5,
    backgroundColor: colors.white,
  },
  focused: {
    ":focus": {
      boxShadow: getShadow(),
      backgroundColor: colors.blue2,
      color: colors.blue1,
    },
  },
  error: {
    boxShadow: getShadow(colors.red1),
    border: `1px solid ${colors.red2}`,
    backgroundColor: colors.red2,
    ":focus": {
      boxShadow: getShadow(colors.red1),
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
