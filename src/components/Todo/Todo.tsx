import React, { FC, useState } from "react";

import { ITodo } from "src/types";
import { StyleSheet, css } from "aphrodite";
import { colors, getShadow, typography } from "src/styles";
import { Icon } from "src/components/Icon/Icon";
import { useDispatch } from "react-redux";
import { changeStatus, deleteTodo } from "src/store/todo/actions";
import { useNotification } from "src/hooks";
import { setBoltColor, getCategoryIcon } from "src/helpers";
import { useTranslation } from "react-i18next";
import { Button } from "../Button";

interface Props {
  todo: ITodo;
}

export const Todo: FC<Props> = ({ todo }) => {
  const { t } = useTranslation("notification");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { handleNotification } = useNotification();

  const { id, title, category, priority, status } = todo;
  const isDone = status === "done";

  const handleClick = (): void => {
    setIsClicked(!isClicked);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
    handleNotification({
      type: "warning",
      title: t("deleteTitle"),
      text: t("deleteText"),
    });
  };

  const handleChangeStatus = () => {
    dispatch(changeStatus(id));
    setIsClicked(!isClicked);
    handleNotification({
      type: "info",
      text: t("changeStatusText"),
    });
  };

  const sharedButtons = (
    <>
      <Button
        onClick={handleDelete}
        iconName="bin-icon"
        style={styles.button}
      />
      <Button
        onClick={handleChangeStatus}
        iconName={!isDone ? "done-icon" : "back-icon"}
        style={styles.button}
      />
    </>
  );

  const buttonSection = !isDone ? (
    <>
      {category && (
        <div className={css(styles.category)}>
          <Icon name={getCategoryIcon(category)} />
        </div>
      )}
      <div className={css(styles.bolt)}>
        <Icon name="bolt-icon" color={setBoltColor(priority)} />
      </div>
    </>
  ) : (
    <div className={css(styles.doneButtons)}>{sharedButtons}</div>
  );

  return (
    <div className={css(styles.taskWrap)}>
      <div
        className={css(styles.task, isDone && styles.doneTask)}
        onClick={handleClick}
      >
        <div
          className={css(
            styles.id,
            isDone && styles.doneId,
            typography.altBody1
          )}
        >
          <p>{id}</p>
        </div>
        <div className={css(styles.text, typography.altBody1)}>
          <p className={css(styles.taskName)}>{title}</p>
        </div>
        {buttonSection}
      </div>
      {isClicked && !isDone && (
        <div className={css(styles.additionalButtons)}>{sharedButtons}</div>
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
  doneTask: {
    width: "300x",
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
  doneId: {
    paddingLeft: "15px",
    width: "8%",
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
  doneButtons: {
    position: "absolute",
    right: 0,
  },
});
