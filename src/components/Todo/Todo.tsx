import React, { FC } from "react";

import { ITodo } from "src/types";

import { StyleSheet, css } from "aphrodite";
import { colors, typography } from "src/styles";
import { i18n } from "src/locale";

interface Props {
  todo: ITodo;
}

export const Todo: FC<Props> = ({ todo }) => {
  const handleClick = (): void => {
    alert(i18n.t("test:alertTodo"));
  };
  return (
    <div
      className={css(styles.task)}
      onClick={handleClick}
      onKeyDown={handleClick}
      role="menuitem"
      tabIndex={Math.random()}
    >
      <p className={css(styles.id, typography.altBody1)}>{todo.id}</p>
      <div className={css(styles.text, typography.altBody1)}>
        <p>{todo.title}</p>
      </div>
    </div>
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
    maxWidth: "90%",
    width: "400px",
    height: "40px",
    backgroundColor: colors.white,
    cursor: "pointer",
    color: colors.black,
    ":hover": {
      backgroundColor: colors.blue6,
    },
  },
  id: {
    border: `4px inset ${colors.blue1}`,
    padding: "0 20px",
    marginLeft: "10px",
    width: "1%",
  },
  text: {
    flexGrow: 2,
    borderRight: `1px solid ${colors.white}`,
  },
});
