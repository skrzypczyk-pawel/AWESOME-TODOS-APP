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
      <div className={css(styles.id, typography.altBody1)}>
        <p>{todo.id}</p>
      </div>
      <div className={css(styles.text, typography.altBody1)}>
        <p className={css(styles.taskName)}>{todo.title}</p>
      </div>

      {todo.status === "done" && (
        <div className={css(styles.done, typography.altBody1)}>
          <p>{i18n.t("todo:done")}</p>
        </div>
      )}
    </div>
  );
};

const styles = StyleSheet.create({
  task: {
    position: "relative",
    overflow: "hidden",
    transition: "0.5s",
    margin: "5px auto",
    boxShadow: `3px 3px 5px ${colors.blue4}`,
    border: `1px solid ${colors.white}`,
    borderRadius: 5,
    maxWidth: "90%",
    width: "400px",
    height: "45px",
    backgroundColor: colors.white,
    cursor: "pointer",
    color: colors.black,
    ":hover": {
      backgroundColor: colors.blue6,
    },
  },
  id: {
    position: "absolute",
    left: "0",
    display: "block",
    margin: "0",
    marginRight: "10px",
    boxShadow: `-3px 0px 8px 3px ${colors.blue6}`,
    width: "12%",
    height: "100%",
    backgroundColor: colors.blue6,
    color: colors.white,
  },
  text: {
    position: "absolute",
    left: "12%",
    width: "70%",
    lineHeight: "90",
    textAlign: "center",
  },
  taskName: {
    lineHeight: "1",
  },
  done: {
    position: "absolute",
    right: "0",
    marginLeft: "10px",
    boxShadow: `-3px 0px 8px 3px ${colors.blue6}`,
    width: "7%",
    height: "100%",
    padding: "0 10px",
    backgroundColor: colors.blue6,
    color: colors.white,
  },
});
