import React, { FC, useState } from "react";
import { css, StyleSheet } from "aphrodite";
import { colors } from "src/styles";
import { i18n } from "src/locale";
import { Category } from "src/types";
import { useDispatch } from "react-redux";
import { filterForCategoryTodo } from "src/store/todo/actions";
import { useNotification } from "src/hooks";
import { Categories } from "./Categories";
import { CircleIconButton } from "./CircleIconButton";

export interface Props {}

export const CategoryFilter: FC<Props> = () => {
  const [category, setCategory] = useState<Category>("none");
  const dispatch = useDispatch();
  const { handleNotification } = useNotification();
  const handleClick = (newCategory: Category) => {
    setCategory(newCategory);
    if (newCategory === category) {
      setCategory("none");
      dispatch(filterForCategoryTodo("none"));
      handleNotification({
        text: i18n.t("notification:filterDisabled"),
        type: "info",
      });
    } else if (newCategory !== "none") {
      dispatch(filterForCategoryTodo(newCategory));
      handleNotification({
        text: i18n.t("notification:filterByCategory"),
        type: "info",
      });
    }
  };

  return (
    <div className={css(styles.wrap)}>
      <Categories>
        <CircleIconButton
          iconName="education-icon"
          onClick={() => handleClick("education")}
          title={i18n.t("addTodo:educationCategory")}
          style={styles.categoryButton}
          isSelected={category === "education"}
        />
        <CircleIconButton
          iconName="work-icon"
          onClick={() => handleClick("homework")}
          title={i18n.t("addTodo:workCategory")}
          style={styles.categoryButton}
          isSelected={category === "homework"}
        />
        <CircleIconButton
          iconName="health-icon"
          onClick={() => handleClick("health")}
          title={i18n.t("addTodo:healthCategory")}
          style={styles.categoryButton}
          isSelected={category === "health"}
        />
      </Categories>
    </div>
  );
};

const styles = StyleSheet.create({
  wrap: {
    position: "absolute",
    top: 0,
    right: "5%",
    width: "30%",
    height: "100%",
    backgroundColor: colors.transparentGrey,
  },
  categoryButton: {
    flexBasis: "100%",
    top: 0,
    padding: "5px",
    margin: "5px",
    width: 45,
    height: 45,
    position: "relative",
    border: `3px solid ${colors.transparent}`,
    borderRadius: "10%",
    ":hover": {
      borderBottom: `3px solid ${colors.blue2}`,
      backgroundColor: colors.blue2,
    },
  },
});
