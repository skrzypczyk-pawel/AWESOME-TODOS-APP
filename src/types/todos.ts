export interface TodoInterface {
  id: string;
  text: string;
}

export interface TodoListInterface {
  data: Array<{
    id: string;
    text: string;
  }>;
}
