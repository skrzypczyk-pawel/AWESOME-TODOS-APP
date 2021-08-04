import React, { FC, useMemo, useState } from "react";

import { css, StyleSheet } from "aphrodite";
import { BaseModal } from "src/components/BaseModal";
import { useModal } from "src/hooks";
import { i18n } from "src/locale";
import { colors, getShadow } from "src/styles";
import { ModalType } from "src/hooks/useModal";
import { ITodo } from "src/types";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HoverButton } from "./HoverButton";
import { HoverButtonsWrap } from "./HoverButtonsWrap";
import { AddNewTodoForm } from "./AddNewTodoForm";
import { TodoList } from "./Todo";

interface Props {
  doneTodos: ITodo[];
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
    () => (!!modalType ? (
      <BaseModal visible={isVisible} closeModal={handleCloseModal}>
        {modalType === "new" ? (
          <AddNewTodoForm />
        ) : (
          <div className={css(styles.list)}>
            <TodoList list={doneTodos} />
          </div>
        )}
      </BaseModal>
    ) : null),
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
  list: {
    overflowX: "hidden",
    borderColor: colors.white,
    borderWidth: "3px 0px 3px 3px",
    borderStyle: "solid",
    borderRadius: "10px 0px 0px 10px",
    height: "80%",
    width: "94%",
  },
  button2: {
    top: 43,
  },
});
