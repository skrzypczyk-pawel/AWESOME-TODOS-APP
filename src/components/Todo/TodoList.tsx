import React, { FC, useEffect, useState } from "react";

import { Todo } from "src/components/Todo/Todo";
import Loader from "src/components/Loader";
import { ITodo, RawTodo } from "src/types";
import { i18n } from "src/locale";
import { fillDummyTodo } from "src/helpers";

export const TodoList: FC = () => {
  const [tasks, setTasks] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const todosDataURL = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch(todosDataURL);
      const todosTasks: RawTodo[] = await response.json();
      const updatedTodos: ITodo[] = [];
      todosTasks.forEach((item) => {
        const updateTodo = fillDummyTodo(item);
        updatedTodos.push(updateTodo);
      });
      setTasks(updatedTodos);
    } catch {
      alert(i18n.t("todo:alert"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        tasks.map((todo) => <Todo key={todo.id} todo={todo} />)
      )}
    </>
  );
};
