import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todo } from "src/components/Todo/Todo";
import Loader from "src/components/Loader";
import { fetchTodoRequest } from "src/store/todo/actions";
import { AppState } from "src/store/rootReducer";
import { ITodo } from "src/types";
import { useNotification } from "src/hooks";
import { useTranslation } from "react-i18next";
import { StyledText } from "../StyledText";

export const TodoList: FC = () => {
  const dispatch = useDispatch();

  const { todos, loading } = useSelector((state: AppState) => state.todo);

  const { handleNotification } = useNotification();

  const { t } = useTranslation("todo");

  useEffect(() => {
    dispatch(fetchTodoRequest(handleNotification));
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {!todos.length ? (
        <StyledText>{t("emptyArray")}</StyledText>
      ) : (
        todos
          .filter((todo: ITodo) => todo.status === "todo")
          .map((todo: ITodo) => <Todo key={todo.id} todo={todo} />)
      )}
    </>
  );
};
