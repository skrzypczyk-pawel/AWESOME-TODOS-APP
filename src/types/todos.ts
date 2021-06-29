export interface ITodo {
  id: string;
  title: string;
  category?: Category;
  completed?: boolean;
  createdAt?: string;
  deadline?: string;
  description?: string;
  priority?: Priority;
  status?: Status;
}

export type Category = "health" | "homework" | "education";
export type Priority = "low" | "medium" | "high";
export type Status = "done" | "todo";
