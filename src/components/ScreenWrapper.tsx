import React, { FC, useMemo, useState } from "react";
/* eslint-disable */

//
// remove this disable before merge
//
import { css, StyleSheet } from "aphrodite";
import { BaseModal } from "src/components/BaseModal";
import { useModal } from "src/hooks";
import { i18n } from "src/locale";
import { colors, getShadow } from "src/styles";
import { ModalType } from "src/hooks/useModal";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HoverButton } from "./HoverButton";
import { HoverButtonsWrap } from "./HoverButtonsWrap";
import { AddNewTodoForm } from "./AddNewTodoForm";
import { ITodo } from "src/types";
import { TodoList } from "./Todo";

interface Props {
  doneTodos: ITodo[]
}

export const ScreenWrapper: FC<Props> = ({ children, doneTodos }) => {
  const { isVisible, openModal, closeModal } = useModal();
  const [modalType, setModalType] = useState<ModalType>(undefined);

  const handleOpenModal = (type: ModalType): void => {
    setModalType(type);
    openModal();
  };

  const handleCloseModal = (): void => {
    setModalType(undefined);
    closeModal();
  };

  const modal = useMemo(
    () =>
      !!modalType ? (
        <BaseModal visible={isVisible} closeModal={handleCloseModal}>
          {modalType === "new" ? <AddNewTodoForm /> : <TodoList list={doneTodos} />}
        </BaseModal>
      ) : null,
    [modalType]
  );

  return (
    <main id="main" className={css(styles.wrapper)}>
      <Header subtitle={i18n.t("header:subtitle")} />
      <HoverButtonsWrap>
        <HoverButton
          onClick={() => handleOpenModal("new")}
          iconName="plus-icon"
          text={i18n.t("todo:newEntry")}
        />
        <HoverButton
          onClick={() => handleOpenModal("history")}
          iconName="list-icon"
          style={styles.button2}
          text={i18n.t("todo:history")}
        />
      </HoverButtonsWrap>

      {modal}

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
