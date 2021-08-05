import React, { FC } from "react";
import { StyleSheet, css } from "aphrodite";
import { colors } from "src/styles";
import { useTranslation } from "react-i18next";
import errorImage from "../assets/images/errorImage.png";
import { StyledText } from "./StyledText";

interface Props {
  error: string;
}

export const ErrorBox: FC<Props> = ({ error }) => {
  const { t } = useTranslation("error");
  return (
    <div className={css(styles.wrap)}>
      <div>
        <StyledText style={styles.text}>{t("wentWrong")}</StyledText>
        <StyledText style={styles.text}>
          {t("error:error", { error })}
        </StyledText>
      </div>
      <img className={css(styles.image)} src={errorImage} alt="Logo" />
    </div>
  );
};

const styles = StyleSheet.create({
  wrap: {
    paddingTop: "20px",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    borderTop: `solid 3px ${colors.black}`,
    width: "100%",
    height: "20vh",
    textAlign: "center",
  },
  text: {
    fontSize: "24px",
    color: colors.blue4,
  },
  image: {
    height: "100%",
  },
});
