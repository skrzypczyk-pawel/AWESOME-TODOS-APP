import React, { FC } from "react";
import { css, StyleSheet } from "aphrodite";
import { colors } from "src/styles";
import { i18n } from "src/locale";
import { Category } from "src/types";
import { useNotification } from "src/hooks";
import { Categories } from "./Categories";
import { CircleIconButton, IconButtonsNames } from "./CircleIconButton";

interface Props {
  handleFilter: (filter: Category) => void;
  activeCategory: Category;
}

export const CategoryFilter: FC<Props> = ({ handleFilter, activeCategory }) => {
  const { handleNotification } = useNotification();

  const handleClick = (_filter: Category) => {
    const isTheSameCategory = _filter === activeCategory;
    handleFilter(isTheSameCategory ? "none" : _filter);
    handleNotification({
      text: i18n.t(
        isTheSameCategory
          ? "notification:filterDisabled"
          : "notification:filterByCategory"
      ),
      type: "info",
    });
  };

  const filterConfig: IconButtonsNames[] = ["education", "homework", "health"];

  return (
    <div className={css(styles.wrap)}>
      <Categories>
        {filterConfig.map((filter) => (
          <CircleIconButton
            iconName={`${filter}-icon`}
            onClick={() => handleClick(filter)}
            title={i18n.t(`addTodo:${filter}`)}
            style={styles.categoryButton}
            isSelected={activeCategory === filter}
          />
        ))}
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
