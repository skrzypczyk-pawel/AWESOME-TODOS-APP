import React, {
  ChangeEventHandler,
  FC,
  useEffect,
  useMemo,
  useState,
} from "react";
import { TodoList, ScreenWrapper, Loader } from "src/components";
import { StyleSheet, css } from "aphrodite";
import { colors } from "src/styles";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";
import { Category, ITodo } from "src/types";
import { useNotification } from "src/hooks";
import { fetchTodoRequest } from "src/store/todo/actions";
import { ErrorBox } from "src/components/ErrorBox";
import { FinderBar } from "src/components/FinderBar";
import { CategoryFilter } from "src/components/CategoryFilter";
import { SearchBar } from "src/components/SearchBar";
import debounce from "lodash.debounce";

interface Props {}

const HomeScreen: FC<Props> = () => {
  const [filter, setFilter] = useState<Category>("none");
  const [searchedText, setSearchedText] = useState<string>("");

  const { error, loading, todos } = useSelector(
    (state: AppState) => state.todo
  );

  const doneTodos = todos.filter((todo: ITodo) => todo.status === "done");

  const activeTodos = useMemo(() => {
    const aTodos = todos
      .filter((todo: ITodo) => todo.status === "todo")
      .filter((todo: ITodo) => todo.title.toLowerCase().includes(searchedText.toLowerCase()));

    if (filter === "none") {
      return aTodos;
    }
    return aTodos.filter((todo: ITodo) => todo.category === filter);
  }, [todos, filter, searchedText]);

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchedText(event.target.value);
  };

  const debouncedChangeHandler = useMemo(() => {
    return debounce(changeHandler, 300);
  }, []);

  const { handleNotification } = useNotification();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoRequest(handleNotification));
  }, [dispatch]);

  return (
    <ScreenWrapper doneTodos={doneTodos}>
      <div className={css(styles.homeScreen)}>
        <FinderBar>
          <SearchBar onChange={debouncedChangeHandler} />
          <CategoryFilter activeCategory={filter} handleFilter={setFilter} />
        </FinderBar>
        {!!error && <ErrorBox error={error} />}
        {loading ? <Loader /> : <TodoList list={activeTodos} />}
      </div>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    flexDirection: "column",
    alignItems: "stretch",
    flexGrow: 1,
    display: "flex",
    backgroundColor: colors.white,
    textAlign: "center",
    textTransform: "uppercase",
    color: colors.blue4,
  },
  testText: {
    margin: "20px 10vw",
  },
});

export default HomeScreen;
