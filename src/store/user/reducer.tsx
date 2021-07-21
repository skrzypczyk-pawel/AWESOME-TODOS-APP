import { UserActions, UserState } from "src/types";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_RESOLVED,
  FETCH_USER_REJECTED,
  ADD_USER,
} from "./actionTypes";

const initialState: UserState = {
  users: [],
  error: "",
};

export default (state = initialState, action: UserActions) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_RESOLVED:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USER_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_USER:
      const updatedUsers = [...state.users, action.payload];
      return {
        ...state,
        users: updatedUsers,
      };
    default:
      return {
        ...state,
      };
  }
};
