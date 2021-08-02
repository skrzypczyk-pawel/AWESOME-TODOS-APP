import { Notification } from "src/hooks/useNotification";
import { ITodo } from "src/types/todos";

export const FETCH_TODO_REQUEST = "FETCH_TODO_REQUEST";
export const FETCH_TODO_RESOLVED = "FETCH_TODO_RESOLVED";
export const FETCH_TODO_REJECTED = "FETCH_TODO_REJECTED";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CHANGE_STATUS = "CHANGE_STATUS";

export interface TodoState {
  loading: boolean;
  todos: ITodo[];
  error: string;
}
export interface FetchTodoRequest {
  type: typeof FETCH_TODO_REQUEST;
  payload: (notification: Notification) => void;
}

export type FetchTodoResolved = {
  type: typeof FETCH_TODO_RESOLVED;
  payload: ITodo[];
};

export type FetchTodoRejected = {
  type: typeof FETCH_TODO_REJECTED;
  payload: string;
};

export type AddTodo = {
  type: typeof ADD_TODO;
  payload: ITodo;
};

export type DeleteTodo = {
  type: typeof DELETE_TODO;
  payload: string | number;
};

export type ChangeStatus = {
  type: typeof CHANGE_STATUS;
  payload: string | number;
};

export type TodoActions =
  | FetchTodoRequest
  | FetchTodoResolved
  | FetchTodoRejected
  | AddTodo
  | DeleteTodo
  | ChangeStatus;
