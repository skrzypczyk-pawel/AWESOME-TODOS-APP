import React, { FC } from "react";

import { TodoListInterface } from "types/todos";

import Todo from "components/Todo";

const TodoList: FC<TodoListInterface> = ({ data }) => {
  const tasks = data.map((task) => (
    <Todo key={task.id} id={task.id} text={task.text} />
  ));
  return (
    <>
      <div>{tasks}</div>
    </>
  );
};

export default TodoList;
