import React, { FC } from "react";

import { Todo } from "components/Todo/Todo";
import { todos } from "constants/todos";

export const TodoList: FC = () => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
};
