import React, { FC, useEffect, useState } from "react";

import { Todo } from "src/components/Todo/Todo";
import Loader from "src/components/Loader";
import { ITodo } from "src/types";
import { i18n } from "src/locale";

export const TodoList: FC = () => {
  const [tasks, setTasks] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const todosDataURL = "https://jsonplaceholder.typicode.com/todos";

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch(todosDataURL);
      const todosTasks = await response.json();
      setTasks(todosTasks.filter((task: ITodo) => +task.id <= 30));
    } catch {
      alert(i18n.t("todo:alert"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const randomNumber = () => {
    return Math.floor(Math.random() * 3);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        tasks.map((todo) => {
          if (todo.completed === true) {
            todo.status = "done";
          }
          if (todo.completed === false) {
            todo.status = "todo";
          }
          if (randomNumber() === 0) {
            todo.priority = "high";
            todo.category = "education";
            todo.deadline = "07-08-2022";
            todo.description = i18n.t("todo:description1");
            todo.createdAt = "school";
          }
          if (randomNumber() === 1) {
            todo.priority = "low";
            todo.category = "health";
            todo.deadline = "01-09-2021";
            todo.description = i18n.t("todo:description2");
            todo.createdAt = "work";
          }
          if (randomNumber() === 2) {
            todo.priority = "medium";
            todo.category = "homework";
            todo.deadline = "01-01-2034";
            todo.description = i18n.t("todo:description3");
            todo.createdAt = "house";
          }

          return <Todo key={todo.id} todo={todo} />;
        })
      )}
    </>
  );
};
