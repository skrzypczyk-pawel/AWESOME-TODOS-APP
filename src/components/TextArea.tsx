import React, { ChangeEventHandler, FC, HTMLAttributes, useState } from "react";

import { StyleSheet, css } from "aphrodite";
import { colors, getShadow } from "src/styles/palette";

import { StyledText } from "./StyledText";

interface Props {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  name: string;
  value: string;
  error?: string | boolean;
  focused?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  label?: string;
  placeholder?: string;
  style?: HTMLAttributes<HTMLInputElement>;
}

export const TextArea: FC<Props> = ({
  name,
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
          name={name}
          onFocus={handleFocus}
          onChange={onChange}
          onBlur={handleBlur}
          className={css(
            styles.textarea,
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
  textarea: {
    transition: "0.1s",
    margin: "10px auto",
    boxShadow: getShadow(colors.blue4),
    border: `1px solid ${colors.white}`,
    outline: "none",
    borderRadius: 5,
    minHeight: "10vh",
    backgroundColor: colors.white,
    color: colors.black,
  },
  focused: {
    ":focus": {
      boxShadow: getShadow(colors.blue6),
      backgroundColor: colors.white,
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
});
