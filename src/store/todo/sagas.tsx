import { all, call, put, takeLatest } from "redux-saga/effects";
import { fillDummyTodo } from "src/helpers";

import { ITodo, RawTodo } from "src/types";
import { todosDataURL } from "src/api/todos";
import { i18n } from "src/locale";
import { fetchTodoRejected, fetchTodoResolved } from "./actions";
import { FETCH_TODO_REQUEST, FetchTodoRequest } from "./actionTypes";

const getTodos = () => fetch(todosDataURL);

function* fetchTodoSaga(action: FetchTodoRequest) {
  const handleNotification = action.payload;
  try {
    const response: Response = yield call(getTodos);
    const todosTasks: RawTodo[] = yield response.json();
    const updatedTodos: ITodo[] = [];
    todosTasks.slice(1, 30).forEach((item) => {
      const updateTodo = fillDummyTodo(item);
      updatedTodos.push(updateTodo);
    });
    yield put(fetchTodoResolved(updatedTodos));
    handleNotification({
      text: i18n.t("notification:resolvedText"),
      title: i18n.t("notification:resolvedTitle"),
    });
  } catch (e) {
    yield put(fetchTodoRejected(e.message));
    handleNotification({
      text: e.message,
      type: "error",
      title: i18n.t("notification:rejectedTitle"),
    });
  }
}

function* todoSaga() {
  yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;
