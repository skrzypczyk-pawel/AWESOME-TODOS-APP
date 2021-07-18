import { TodoActions, TodoState } from "src/types";
import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  ADD_TODO,
} from "./actionTypes";

const initialState: TodoState = {
  loading: false,
  todos: [],
  error: false,
};

export default (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload.todos,
        error: false,
      };
    case FETCH_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        todos: [],
        error: false,
      };
    case ADD_TODO:
      const newState = state;
      newState.todos.push(action.payload);
      return {
        ...state,
        todos: newState.todos,
      };
    default:
      return {
        ...state,
      };
  }
};
