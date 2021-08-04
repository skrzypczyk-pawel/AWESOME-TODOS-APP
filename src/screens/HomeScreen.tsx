import React, { FC } from "react";

import { TodoList, ScreenWrapper } from "src/components";
import { StyleSheet, css } from "aphrodite";
import { colors } from "src/styles";
import { i18n } from "src/locale";
import { CategoryFilter } from "src/components/CategoryFilter";
import { FinderBar } from "src/components/FinderBar";

interface Props {}

const HomeScreen: FC<Props> = () => {
  return (
    <ScreenWrapper>
      <div className={css(styles.homeScreen)}>
        <FinderBar>
          <CategoryFilter />
        </FinderBar>
        <h3>{i18n.t("todo:taskToDo")}</h3>
        <TodoList />
      </div>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    flexDirection: "column",
    alignItems: "stretch",
    flexGrow: 1,
    display: "flex",
    backgroundColor: colors.white,
    textAlign: "center",
    textTransform: "uppercase",
    color: colors.blue4,
  },
  testText: {
    margin: "20px 10vw",
  },
});

export default HomeScreen;
