import { all, call, put, takeLatest } from "redux-saga/effects";
import { fillDummyTodo } from "src/helpers";

import { ITodo, RawTodo } from "src/types";
import { fetchTodoFailure, fetchTodoSuccess } from "./actions";
import { FETCH_TODO_REQUEST } from "./actionTypes";

const todosDataURL = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => fetch(todosDataURL);

function* fetchTodoSaga() {
  try {
    const response: Response = yield call(getTodos);
    const todosTasks: RawTodo[] = yield response.json();
    const updatedTodos: ITodo[] = [];
    todosTasks.forEach((item) => {
      if (+item.id <= 30) {
        const updateTodo = fillDummyTodo(item);
        updatedTodos.push(updateTodo);
      }
    });
    yield put(
      fetchTodoSuccess({
        todos: updatedTodos,
      })
    );
  } catch (e) {
    yield put(
      fetchTodoFailure({
        error: e.message,
      })
    );
  }
}

function* todoSaga() {
  yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;
