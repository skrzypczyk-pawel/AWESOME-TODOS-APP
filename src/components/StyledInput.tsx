import React, { FC, HTMLAttributes, useState } from "react";

import { StyleSheet, css } from "aphrodite";
import { colors } from "styles/palette";

interface Props {
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
  onFocus,
  placeholder,
  style,
  type = "text",
  value = "",
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isFocused, setIsFocused] = useState(focused);

  const handleFocus = () => {
    setIsFocused(true);
    if (onFocus) {
      onFocus();
    }
  };
  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <div>
      <label htmlFor={label}>
        {label}
        <input
          id={label}
          onFocus={handleFocus}
          onChange={(event) => setInputValue(event.target.value)}
          onBlur={handleBlur}
          type={type}
          className={css(
            styles.input,
            isFocused && styles.inputFcs,
            style,
            !!error && styles.error
          )}
          placeholder={placeholder}
          value={inputValue}
        />
      </label>
      {!!error && <p className={css(styles.errorText)}>{error}</p>}
    </div>
  );
};
const styles = StyleSheet.create({
  input: {
    transition: "0.5s",
    margin: 2,
    boxShadow: `3px 3px 5px ${colors.grayBlue}`,
    border: `1px solid ${colors.white}`,
    outline: "none",
    borderRadius: 5,
    backgroundColor: colors.white,
  },
  inputFcs: {
    ":focus": {
      boxShadow: `3px 3px 5px ${colors.skyBlue}`,
      backgroundColor: colors.vLightBlue,
    },
  },
  error: {
    boxShadow: `3px 3px 5px ${colors.red}`,
    border: `1px solid ${colors.lightRed}`,
    backgroundColor: colors.lightRed,
    ":focus": {
      boxShadow: `3px 3px 5px ${colors.red}`,
      backgroundColor: colors.skin,
      color: colors.lightRed,
    },
  },
  errorText: {
    marginTop: 3,
    fontSize: 12,
    textTransform: "none",
    color: colors.red,
  },
});

export default StyledInput;
