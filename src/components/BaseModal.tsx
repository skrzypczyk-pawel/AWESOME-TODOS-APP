import React, { FC } from "react";

import { css, StyleSheet } from "aphrodite";
import { colors, getShadow } from "src/styles";
import { CircleIconButton } from "./CircleIconButton";

interface Props {
  visible: boolean;
  closeModal: () => void;
}

export const BaseModal: FC<Props> = ({ children, visible, closeModal }) => {
  return (
    <div
      onClick={closeModal}
      className={css(styles.backdrop, !visible && styles.hide)}
    >
      <div className={css(styles.modal)} onClick={(e) => e.stopPropagation()}>
        {children}
        <CircleIconButton
          iconName="close-icon"
          onClick={closeModal}
          style={styles.closeButton}
        />
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    zIndex: 100,
    position: "fixed",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.transparentGrey,
  },
  modal: {
    zIndex: 102,
    position: "fixed",
    left: "35vw",
    top: "15vh",
    right: "35vw",
    bottom: "15vh",
    backgroundColor: colors.blue5,
    boxShadow: getShadow(colors.transparent, 0, 0, 30),
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  hide: {
    display: "none",
  },
  closeButton: {
    zIndex: 105,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.5s",
    position: "absolute",
    top: "1vh",
    right: "1vw",
    width: 45,
    height: 45,
    cursor: "pointer",
    border: `3px solid ${colors.transparent}`,
    borderRadius: "100%",
    backgroundColor: colors.transparent,
    ":hover": {
      border: `3px solid ${colors.blue2}`,
    },
  },
});
