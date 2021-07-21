import {
  IUser,
  FetchUserRequest,
  FetchUserResolved,
  FetchUserRejected,
  AddUser,
} from "src/types";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_REJECTED,
  FETCH_USER_RESOLVED,
  ADD_USER,
} from "./actionTypes";

export const fetchUserRequest = (): FetchUserRequest => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUserResolved = (payload: IUser[]): FetchUserResolved => ({
  type: FETCH_USER_RESOLVED,
  payload,
});

export const fetchUserRejected = (payload: string): FetchUserRejected => ({
  type: FETCH_USER_REJECTED,
  payload,
});

export const addUser = (payload: IUser): AddUser => ({
  type: ADD_USER,
  payload,
});
