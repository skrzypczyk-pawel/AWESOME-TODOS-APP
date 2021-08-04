import React, { FC, useState } from "react";

import { useNotification } from "src/hooks";
import { useDispatch } from "react-redux";
import { changeStatus, deleteTodo } from "src/store/todo/actions";

import { StyleSheet, css } from "aphrodite";
import { colors, getShadow, typography } from "src/styles";
import { i18n } from "src/locale";

import { ITodo } from "src/types";

import { Button } from "../Button";

interface Props {
  todo: ITodo;
}

export const HistoryTodo: FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const { handleNotification } = useNotification();

  const handleClick = (): void => {
    setIsClicked(!isClicked);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    handleNotification({
      type: "warning",
      title: i18n.t("notification:deleteTitle"),
      text: i18n.t("notification:deleteText"),
    });
  };

  const handleChangeStatus = () => {
    dispatch(changeStatus(todo.id));
    setIsClicked(!isClicked);
    handleNotification({
      type: "info",
      text: i18n.t("notification:changeStatusText"),
    });
  };

  return (
    <div className={css(styles.taskWrap)}>
      <div className={css(styles.task)} onClick={handleClick}>
        <div className={css(styles.id, typography.altBody1)}>
          <p>{todo.id}</p>
        </div>
        <div className={css(styles.text, typography.altBody1)}>
          <p className={css(styles.taskName)}>{todo.title}</p>
        </div>
        <div className={css(styles.additionalButtons)}>
          <Button
            onClick={handleDelete}
            iconName="bin-icon"
            style={styles.button}
          />
          <Button
            onClick={handleChangeStatus}
            iconName="back-icon"
            style={styles.button}
          />
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  taskWrap: {
    position: "relative",
    transition: "0.5s",
    marginTop: "5px",
    marginLeft: "5px",
    cursor: "pointer",
  },
  task: {
    margin: "3px auto",
    position: "relative",
    overflow: "hidden",
    transition: "0.5s",
    boxShadow: getShadow(colors.blue4),
    border: `1px solid ${colors.white}`,
    borderRadius: 5,
    width: "350px",
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
    paddingLeft: "7px",
    marginRight: "10px",
    boxShadow: getShadow(),
    width: "21px",
    height: "100%",
    backgroundColor: colors.blue6,
    color: colors.white,
  },
  text: {
    position: "absolute",
    left: "40px",
    width: "60%",
    lineHeight: "90",
    textAlign: "center",
  },
  taskName: {
    lineHeight: "1",
  },
  category: {
    position: "absolute",
    right: "0%",
    width: "15%",
    height: "70%",
    opacity: 0.8,
    margin: "5px auto",
    transition: "0.5s",
    transform: "scale(0.7, 0.7)",
  },
  additionalButtons: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    top: "3px",
    right: "5px",
    opacity: 0.8,
    width: "100px",
    height: "45px",
    ":hover": {
      opacity: 1,
    },
  },
  button: {
    position: "relative",
    top: "none",
    left: "none",
    transform: "translateX(0)",
    transition: "0.5s",
    alignItems: "center",
    border: `2px solid ${colors.blue2}`,
    borderRadius: "5px",
    width: 40,
    height: 40,
    padding: "3px",
    backgroundColor: colors.white,
    cursor: "pointer",
    textAlign: "center",
    ":hover": {
      backgroundColor: colors.blue2,
    },
  },
});
