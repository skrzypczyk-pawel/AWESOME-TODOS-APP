import { combineReducers } from "redux";
import todoReducer from "./todo/reducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  user: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
