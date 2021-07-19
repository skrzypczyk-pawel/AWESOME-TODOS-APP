import { TodoActions, TodoState } from "src/types";
import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_RESOLVED,
  FETCH_TODO_REJECTED,
  ADD_TODO,
} from "./actionTypes";

const initialState: TodoState = {
  loading: false,
  todos: [],
  error: "",
};

export default (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_TODO_RESOLVED:
      return {
        ...state,
        loading: false,
        todos: action.payload,
        error: "",
      };
    case FETCH_TODO_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_TODO:
      const stateCopy = [...state.todos];
      stateCopy.push(action.payload);
      return {
        ...state,
        todos: stateCopy,
      };
    default:
      return {
        ...state,
      };
  }
};
