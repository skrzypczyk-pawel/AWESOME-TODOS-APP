import React, { FC, Dispatch, SetStateAction } from "react";

import { CloseIcon } from "src/assets/icons";

import { css, StyleSheet } from "aphrodite";
import { colors } from "src/styles";

interface Props {
  show: boolean;
  callback: Dispatch<SetStateAction<boolean>>;
}

export const BaseModal: FC<Props> = ({ children, show, callback }) => {
  const hideModal = () => {
    return callback(!show);
  };

  return (
    <div
      onClick={hideModal}
      className={css(styles.backdrop, show && styles.hide)}
    >
      <div className={css(styles.modal)} onClick={(e) => e.stopPropagation()}>
        {children}
        <button
          type="button"
          className={css(styles.button)}
          onClick={hideModal}
        >
          <CloseIcon />
        </button>
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
    top: "20vh",
    right: "35vw",
    bottom: "20vh",
    backgroundColor: colors.white,
    boxShadow: `0px 0px 30px ${colors.transparentGrey}`,
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  hide: {
    display: "none",
  },
  button: {
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
