import React, { FC } from "react";

import { useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";

import { colors, getShadow } from "src/styles";
import { css, StyleSheet } from "aphrodite";
import { i18n } from "src/locale";

import { ITodo } from "src/types";

import { StyledText } from "./StyledText";
import { HistoryTodo } from "./Todo";

export interface Props {}

export const TodoHistoryListModal: FC<Props> = () => {
  const { todos } = useSelector((state: AppState) => state.todo);
  const historyTodos = todos
    .filter((todo: ITodo) => todo.status === "done")
    .map((todo: ITodo) => <HistoryTodo key={todo.id} todo={todo} />);
  return (
    <>
      <div className={css(styles.title)}>
        <StyledText style={styles.titleText}>
          {i18n.t("todo:history")}
        </StyledText>
      </div>
      <div className={css(styles.wrapper)}>
        {!todos.length ? (
          <StyledText style={styles.warning}>
            {i18n.t("todo:emptyArray")}
          </StyledText>
        ) : (
          historyTodos
        )}
      </div>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 103,
    position: "relative",
    backgroundColor: colors.blue1,
    boxShadow: getShadow(colors.transparent, 0, 0, 15),
    borderLeft: `2px solid ${colors.lightBlue}`,
    borderTop: `2px solid ${colors.lightBlue}`,
    height: "80%",
    width: "94%",
    overflowX: "hidden",
    overflowY: "auto",
    borderBottomLeftRadius: "15px",
    borderTopLeftRadius: "15px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    zIndex: 103,
    position: "relative",
  },
  titleText: {
    fontSize: "26px",
    textTransform: "uppercase",
    marginBottom: "40px",
    color: colors.blue2,
  },
  warning: {
    textAlign: "center",
    color: colors.blue2,
  },
});
