export interface BaseTodos {
  id: string | number;
  title: string;
}
export interface ITodo extends BaseTodos {
  category?: Category;
  createdAt?: string;
  deadline?: string;
  description: string;
  priority?: Priority;
  status?: Status;
}

export type Category = "health" | "homework" | "education" | "none";
export type Priority = "low" | "medium" | "high";
export type Status = "done" | "todo";

export interface RawTodo extends BaseTodos {
  userId: number;
  completed: boolean;
}
