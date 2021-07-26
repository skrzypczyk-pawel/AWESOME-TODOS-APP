import React, { FC } from "react";
import { css, StyleSheet } from "aphrodite";
import { BaseModal } from "src/components/BaseModal";
import { useModal } from "src/hooks";
import { i18n } from "src/locale";
import { colors, getShadow } from "src/styles";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HoverButton } from "./HoverButton";
import { HoverButtonsWrap } from "./HoverButtonsWrap";
import { AddNewTodoForm } from "./AddNewTodoForm";

interface Props {}

export const ScreenWrapper: FC<Props> = ({ children }) => {
  const { isVisible, openModal, closeModal } = useModal();

  return (
    <main id="main" className={css(styles.wrapper)}>
      <Header subtitle={i18n.t("header:subtitle")} />
      <HoverButtonsWrap>
        <HoverButton
          onClick={openModal}
          iconName="plus-icon"
          text={i18n.t("todo:newEntry")}
        />
        <HoverButton
          onClick={openModal}
          iconName="list-icon"
          style={styles.button2}
          text={i18n.t("todo:history")}
        />
      </HoverButtonsWrap>
      <BaseModal visible={isVisible} closeModal={closeModal}>
        <AddNewTodoForm />
      </BaseModal>
      {children}
      <Footer />
    </main>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignItems: "stretch",
    display: "flex",
    overflow: "hidden",
    margin: "0 auto",
    boxShadow: getShadow(colors.blue4, 0, 0, 15),
    width: "60vw",
    minWidth: "400px",
    maxWidth: "800px",
    minHeight: "100vh",
    backgroundColor: colors.white,
  },
  button2: {
    top: 43,
  },
});
