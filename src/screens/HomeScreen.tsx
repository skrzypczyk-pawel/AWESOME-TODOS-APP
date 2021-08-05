import React, { FC, useEffect, useState } from "react";
import { TodoList, ScreenWrapper, Loader } from "src/components";
import { StyleSheet, css } from "aphrodite";
import { colors } from "src/styles";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";
import { Category, ITodo } from "src/types";
import { useNotification } from "src/hooks";
import { fetchTodoRequest } from "src/store/todo/actions";
import { ErrorBox } from "src/components/ErrorBox";
import { FinderBar } from "src/components/FinderBar";
import { CategoryFilter } from "src/components/CategoryFilter";

interface Props {}

const HomeScreen: FC<Props> = () => {
  const [filter, setFilter] = useState<Category>("none");

  const { error, loading, todos } = useSelector(
    (state: AppState) => state.todo
  );

  const doneTodos = todos.filter((todo: ITodo) => todo.status === "done");

  const activeTodos = todos.filter((todo: ITodo) => todo.status === "todo");

  const activeFilterTodos = activeTodos.filter(
    (todo: ITodo) => todo.category === filter
  );

  const { handleNotification } = useNotification();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoRequest(handleNotification));
  }, [dispatch]);

  return (
    <ScreenWrapper doneTodos={doneTodos}>
      <div className={css(styles.homeScreen)}>
        <FinderBar>
          <CategoryFilter activeCategory={filter} handleFilter={setFilter} />
        </FinderBar>
        {error ? (
          <ErrorBox error={error} />
        ) : loading ? (
          <Loader />
        ) : filter === "none" ? (
          <TodoList list={activeTodos} />
        ) : (
          <TodoList list={activeFilterTodos} />
        )}
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
