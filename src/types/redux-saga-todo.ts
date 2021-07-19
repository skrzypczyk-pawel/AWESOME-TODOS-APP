import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_RESOLVED,
  FETCH_TODO_REJECTED,
  ADD_TODO,
} from "src/store/todo/actionTypes";
import { ITodo } from "./todos";

export interface TodoState {
  loading: boolean;
  todos: ITodo[];
  error: string;
}
export interface FetchTodoRequest {
  type: typeof FETCH_TODO_REQUEST;
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

export type TodoActions =
  | FetchTodoRequest
  | FetchTodoResolved
  | FetchTodoRejected
  | AddTodo;
