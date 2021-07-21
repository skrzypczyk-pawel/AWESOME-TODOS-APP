import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todo } from "src/components/Todo/Todo";
import Loader from "src/components/Loader";
import { fetchTodoRequest } from "src/store/todo/actions";
import { i18n } from "src/locale";
import { AppState } from "src/store/rootReducer";
import { ITodo } from "src/types";

export const TodoList: FC = () => {
  const dispatch = useDispatch();

  const { todos, loading, error } = useSelector(
    (state: AppState) => state.todo
  );

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        todos.map((todo: ITodo) => <Todo key={todo.id} todo={todo} />)
      )}
      {error && alert(i18n.t("todo:alert"))}
    </>
  );
};
