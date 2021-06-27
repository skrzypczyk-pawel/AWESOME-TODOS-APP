import React, { FC } from "react";

import { Todo } from "src/components/Todo/Todo";
import { todos } from "src/constants";

export const TodoList: FC = () => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
};
