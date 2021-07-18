import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  ADD_USER,
} from "src/store/user/actionTypes";

export interface UserState {
  users: IUser[];
  error: boolean;
}

export interface FetchUserSuccessPayload {
  todos: IUser[];
}

export interface FetchUserFailurePayload {
  error: string;
}

export interface IUser {
  login: string;
  password: string;
}

export interface FetchUserRequest {
  type: typeof FETCH_USER_REQUEST;
}

export type FetchUserSuccess = {
  type: typeof FETCH_USER_SUCCESS;
  payload: FetchUserSuccessPayload;
};

export type FetchUserFailure = {
  type: typeof FETCH_USER_FAILURE;
  payload: FetchUserFailurePayload;
};

export type AddUser = {
  type: typeof ADD_USER;
  payload: IUser;
};

export type UserActions =
  | FetchUserRequest
  | FetchUserSuccess
  | FetchUserFailure
  | AddUser;
