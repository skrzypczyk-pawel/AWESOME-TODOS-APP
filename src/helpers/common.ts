import { i18n } from "src/locale";
import { Priority, Category, ITodo, RawTodo } from "src/types";

export const fillDummyTodo = (todo: RawTodo): ITodo => {
  const number = Math.floor(Math.random() * 3);
  const updatedTodo: ITodo = {
    id: todo.id,
    title: todo.title,
    status: todo.completed ? "done" : "todo",
    priority: priorities[number],
    category: categories[number],
    deadline: "01-01-2034",
    description: i18n.t("todo:description1"),
    createdAt: new Date().toISOString(),
  };
  return updatedTodo;
};

const priorities: Priority[] = ["low", "medium", "high"];

const categories: Category[] = ["health", "education", "homework"];
