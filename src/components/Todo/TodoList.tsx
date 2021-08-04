import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todo } from "src/components/Todo/Todo";
import Loader from "src/components/Loader";
import { fetchTodoRequest } from "src/store/todo/actions";
import { AppState } from "src/store/rootReducer";
import { ITodo } from "src/types";
import { useNotification } from "src/hooks";
import { i18n } from "src/locale";
import { StyledText } from "../StyledText";

export const TodoList: FC = () => {
  const dispatch = useDispatch();

  const { todos, loading, categoryFilter } = useSelector(
    (state: AppState) => state.todo
  );

  const handleCategoryTodos = () => {
    if (categoryFilter !== "none") {
      const doneCategorizedTodos = todos
        .filter((todo: ITodo) => todo.status === "todo")
        .filter((todo: ITodo) => todo.category === categoryFilter)
        .map((todo: ITodo) => <Todo key={todo.id} todo={todo} />);
      return doneCategorizedTodos;
    }
    const doneTodos = todos
      .filter((todo: ITodo) => todo.status === "todo")
      .map((todo: ITodo) => <Todo key={todo.id} todo={todo} />);
    return doneTodos;
  };

  const { handleNotification } = useNotification();

  useEffect(() => {
    dispatch(fetchTodoRequest(handleNotification));
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {!todos.length ? (
        <StyledText>{i18n.t("todo:emptyArray")}</StyledText>
      ) : (
        handleCategoryTodos()
      )}
    </>
  );
};
