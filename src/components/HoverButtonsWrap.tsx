import React, { FC, useState } from "react";
import { css, StyleSheet } from "aphrodite";
import { colors } from "src/styles";

interface Props {}

export const HoverButtonsWrap: FC<Props> = ({ children }) => {
  const [distance, setDistance] = useState<number>(0);
  /** Measure distance between page body and window.  */
  const measureDistanceWrapperWindow = () => {
    // const element = document.getElementById("main") as HTMLElement;
    if (distance === 0) {
      const xPosition = 0;
      setDistance(xPosition);
    } else {
      const xPosition = 0;
      setDistance(xPosition);
    }
  };
  window.addEventListener("load", measureDistanceWrapperWindow);
  window.addEventListener("resize", measureDistanceWrapperWindow);

  return (
    <div className={css(styles.buttonsWrapper)} style={{ right: distance }}>
      {children}
    </div>
  );
};

const styles = StyleSheet.create({
  buttonsWrapper: {
    zIndex: 100,
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    transition: "0.5s",
    position: "fixed",
    top: "30vh",
    width: 50,
    height: 90,
    cursor: "pointer",
    backgroundColor: colors.transparent,
    ":hover": {
      width: 115,
    },
  },
});
