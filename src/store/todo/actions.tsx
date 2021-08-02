import { Notification } from "src/hooks/useNotification";
import { Category, ITodo } from "src/types";
import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_REJECTED,
  FETCH_TODO_RESOLVED,
  ADD_TODO,
  DELETE_TODO,
  CHANGE_STATUS,
  FetchTodoRequest,
  FetchTodoResolved,
  FetchTodoRejected,
  AddTodo,
  DeleteTodo,
  ChangeStatus,
  FilterForCategoryTodo,
  FILTER_FOR_CATEGORY_TODO,
} from "./actionTypes";

export const fetchTodoRequest = (
  callback: (notification: Notification) => void
): FetchTodoRequest => ({
  type: FETCH_TODO_REQUEST,
  payload: callback,
});

export const fetchTodoResolved = (payload: ITodo[]): FetchTodoResolved => ({
  type: FETCH_TODO_RESOLVED,
  payload,
});

export const fetchTodoRejected = (payload: string): FetchTodoRejected => ({
  type: FETCH_TODO_REJECTED,
  payload,
});

export const addTodo = (todo: ITodo): AddTodo => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (id: string | number): DeleteTodo => ({
  type: DELETE_TODO,
  payload: id,
});

export const filterForCategoryTodo = (
  category: Category
): FilterForCategoryTodo => ({
  type: FILTER_FOR_CATEGORY_TODO,
  payload: category,
});

export const changeStatus = (id: string | number): ChangeStatus => ({
  type: CHANGE_STATUS,
  payload: id,
});
