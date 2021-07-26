export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_RESOLVED = "FETCH_USER_RESOLVED";
export const FETCH_USER_REJECTED = "FETCH_USER_REJECTED";
export const ADD_USER = "ADD_USER";

export interface UserState {
  users: IUser[];
  error: string;
}

export interface IUser {
  login: string;
  password: string;
}

export interface FetchUserRequest {
  type: typeof FETCH_USER_REQUEST;
}

export type FetchUserResolved = {
  type: typeof FETCH_USER_RESOLVED;
  payload: IUser[];
};

export type FetchUserRejected = {
  type: typeof FETCH_USER_REJECTED;
  payload: string;
};

export type AddUser = {
  type: typeof ADD_USER;
  payload: IUser;
};

export type UserActions =
  | FetchUserRequest
  | FetchUserResolved
  | FetchUserRejected
  | AddUser;
