import {
  ITodo,
  FetchTodoRequest,
  FetchTodoResolved,
  FetchTodoRejected,
  AddTodo,
} from "src/types";
import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_REJECTED,
  FETCH_TODO_RESOLVED,
  ADD_TODO,
} from "./actionTypes";

export const fetchTodoRequest = (): FetchTodoRequest => ({
  type: FETCH_TODO_REQUEST,
});

export const fetchTodoResolved = (payload: ITodo[]): FetchTodoResolved => ({
  type: FETCH_TODO_RESOLVED,
  payload,
});

export const fetchTodoRejected = (payload: string): FetchTodoRejected => ({
  type: FETCH_TODO_REJECTED,
  payload,
});

export const addTodo = (payload: ITodo): AddTodo => ({
  type: ADD_TODO,
  payload,
});
