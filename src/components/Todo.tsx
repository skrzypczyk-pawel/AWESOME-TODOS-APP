import React, { FC } from "react";

import { TodoInterface } from "types/todos";

import { StyleSheet, css } from "aphrodite";
import { colors, typography } from "styles";
import { i18n } from "locale";

const Todo: FC<TodoInterface> = ({ id, text }) => {
  const handleClick = (): void => {
    alert(i18n.t("test:alertTodo"));
  };
  return (
    <>
      <div
        className={css(styles.task)}
        onClick={() => {
          handleClick();
        }}
        onKeyDown={handleClick}
        role="menuitem"
        tabIndex={Math.random()}
      >
        <div className={css(styles.id, typography.altBody1)}>
          <p>{id}</p>
        </div>
        <div className={css(styles.text, typography.altBody1)}>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
    transition: "0.5s",
    margin: "5px auto",
    boxShadow: `3px 3px 5px ${colors.blue4}`,
    border: `1px solid ${colors.white}`,
    borderRadius: 5,
    maxWidth: "80%",
    width: "400px",
    maxHeight: "5vh",
    minHeight: "40px",
    backgroundColor: colors.white,
    cursor: "pointer",
    color: colors.black,
    ":hover": {
      backgroundColor: colors.blue6,
    },
  },
  id: {
    borderRight: `4px inset ${colors.blue1}`,
    padding: "0 20px",
  },
  text: {
    flexGrow: 2,
    borderRight: `1px solid ${colors.white}`,
  },
});

export default Todo;
