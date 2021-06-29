import React, { FC, useEffect, useState } from "react";

import { Todo } from "src/components/Todo/Todo";
import Loader from "src/components/Loader";
import { ITodo } from "src/types";

export const TodoList: FC = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data.filter((task: ITodo) => +task.id <= 30));
      });
  }, []);

  return (
    <>
      {!!tasks.length ? (
        tasks.map((todo) => {
          return <Todo todo={todo} />;
        })
      ) : (
        <Loader />
      )}
    </>
  );
};
