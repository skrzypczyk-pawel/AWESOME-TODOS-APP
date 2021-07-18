import { UserActions, UserState } from "src/types";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  ADD_USER,
} from "./actionTypes";

const initialState: UserState = {
  users: [],
  error: false,
};

export default (state = initialState, action: UserActions) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        todos: action.payload.todos,
        error: null,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        pending: false,
        todos: [],
        error: action.payload.error,
      };
    case ADD_USER:
      const newState = state;
      newState.users.push(action.payload);
      return {
        ...state,
        todos: newState.users,
      };
    default:
      return {
        ...state,
      };
  }
};
