import React, { FC, useEffect } from "react";
import { TodoList, ScreenWrapper, Loader } from "src/components";
import { StyleSheet, css } from "aphrodite";
import { colors } from "src/styles";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";
import { ITodo } from "src/types";
import { useNotification } from "src/hooks";
import { fetchTodoRequest } from "src/store/todo/actions";
import { ErrorBox } from "src/components/ErrorBox";

interface Props {}

const HomeScreen: FC<Props> = () => {
  const { error, loading, todos } = useSelector(
    (state: AppState) => state.todo
  );
  const activeTodos = todos.filter((todo: ITodo) => todo.status === "todo");
  const doneTodos = todos.filter((todo: ITodo) => todo.status === "done");
  const dispatch = useDispatch();

  const { handleNotification } = useNotification();

  useEffect(() => {
    dispatch(fetchTodoRequest(handleNotification));
  }, [dispatch]);

  return (
    <ScreenWrapper doneTodos={doneTodos}>
      <div className={css(styles.homeScreen)}>
        {error ? (
          <ErrorBox error={error} />
        ) : loading ? (
          <Loader />
        ) : (
          <TodoList list={activeTodos} />
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
