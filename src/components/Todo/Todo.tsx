import React, { FC, useState } from "react";

import { ITodo, IconName } from "src/types";
import { StyleSheet, css } from "aphrodite";
import { colors, getShadow, typography } from "src/styles";
import { i18n } from "src/locale";
import { Icon } from "src/components/Icon/Icon";
import { useDispatch } from "react-redux";
import { changeStatus, deleteTodo } from "src/store/todo/actions";
import { useNotification } from "src/hooks/useNotification";
import { Button } from "../Button";

interface Props {
  todo: ITodo;
}

export const Todo: FC<Props> = ({ todo }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const dispatch = useDispatch();
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
  const setBoltColor = (): string => {
    if (todo.priority === "low") {
      return colors.green2;
    }
    if (todo.priority === "high") {
      return colors.red1;
    }
    return colors.yellow;
  };
  const getCategoryIcon = (): IconName => {
    switch (todo.category) {
      case "homework":
        return "work-icon";
      case "education":
        return "education-icon";
      case "health":
        return "health-icon";
      case "none":
        return "list-icon";
      default:
        return "list-icon";
    }
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
        <div className={css(styles.category)}>
          {todo.category && <Icon name={getCategoryIcon()} />}
        </div>
        {todo.status === "done" ? (
          <div className={css(styles.done, typography.altBody1)}>
            <p>{i18n.t("todo:done")}</p>
          </div>
        ) : (
          <div className={css(styles.bolt)}>
            <Icon name="bolt-icon" color={setBoltColor()} />
          </div>
        )}
      </div>
      {isClicked && (
        <div className={css(styles.additionalButtons)}>
          <Button
            onClick={handleDelete}
            iconName="bin-icon"
            style={styles.button}
          />
          <Button
            onClick={handleChangeStatus}
            iconName="done-icon"
            style={styles.button}
          />
        </div>
      )}
    </div>
  );
};

const styles = StyleSheet.create({
  taskWrap: {
    position: "relative",
    transition: "0.5s",
    margin: "5px auto",
    backgroundColor: colors.white,
    cursor: "pointer",
  },
  task: {
    position: "relative",
    overflow: "hidden",
    transition: "0.5s",
    boxShadow: getShadow(colors.blue4),
    border: `1px solid ${colors.white}`,
    borderRadius: 5,
    width: "500px",
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
    boxShadow: getShadow(),
    width: "12%",
    height: "100%",
    backgroundColor: colors.blue6,
    color: colors.white,
  },
  text: {
    position: "absolute",
    left: "14%",
    width: "60%",
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
  category: {
    position: "absolute",
    right: "11%",
    width: "15%",
    height: "70%",
    opacity: 0.8,
    margin: "5px auto",
    transition: "0.5s",
    transform: "scale(0.7, 0.7)",
  },
  bolt: {
    position: "absolute",
    right: "0",
    marginTop: "12px",
    marginLeft: "10px",
    width: "7%",
    height: "100%",
    padding: "0 10px",
  },
  additionalButtons: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    top: 0,
    right: "-110px",
    width: "100px",
    height: "45px",
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
