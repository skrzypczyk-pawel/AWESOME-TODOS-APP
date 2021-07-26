import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_RESOLVED,
  FETCH_TODO_REJECTED,
  ADD_TODO,
  TodoActions,
  TodoState,
  DELETE_TODO,
  CHANGE_STATUS,
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
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos].filter((task) => task.id !== action.payload),
      };
    case CHANGE_STATUS:
      const updatedTodos = [...state.todos];
      const updatedTodo = updatedTodos.find(
        (todo) => todo.id === action.payload
      );
      if (!updatedTodo) {
        return { ...state };
      }
      updatedTodo.status = updatedTodo.status === "done" ? "todo" : "done";
      return {
        ...state,
        todos: updatedTodos,
      };
    default:
      return {
        ...state,
      };
  }
};
