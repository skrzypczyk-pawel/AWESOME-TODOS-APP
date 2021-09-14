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
import { CircleIconButton } from "src/components/CircleIconButton";

interface Props {}

const HomeScreen: FC<Props> = () => {
  const [filter, setFilter] = useState<Category>("none");
  const [searchedText, setSearchedText] = useState<string>("");

  const { error, loading, todos } = useSelector(
    (state: AppState) => state.todo
  );

  const doneTodos = todos.filter((todo: ITodo) => todo.status === "done");

  const activeTodos = useMemo(() => {
    const activeFilteredTodos = todos
      .filter((todo: ITodo) => todo.status === "todo")
      .filter((todo: ITodo) => todo.title.toLowerCase().includes(searchedText.toLowerCase()));

    if (filter === "none") {
      return activeFilteredTodos;
    }
    return activeFilteredTodos.filter(
      (todo: ITodo) => todo.category === filter
    );
  }, [todos, filter, searchedText]);

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchedText(event.target.value);
  };

  const InputRef = React.createRef<HTMLInputElement>();

  const clearSearchBar = () => {
    setSearchedText("");

    if (!!InputRef.current) {
      InputRef.current.value = "";
    }
  };

  const { handleNotification } = useNotification();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoRequest(handleNotification));
  }, [dispatch]);

  return (
    <ScreenWrapper doneTodos={doneTodos}>
      <div className={css(styles.homeScreen)}>
        <FinderBar>
          <SearchBar
            forwardedRef={InputRef}
            onChange={debounce(changeHandler, 300)}
          />
          <CircleIconButton
            iconName="close-icon"
            onClick={clearSearchBar}
            style={styles.clearButton}
          />
          <CategoryFilter
            activeCategory={filter}
            handleFilter={setFilter}
            style={styles.categoryFilter}
          />
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
  clearButton: {
    position: "relative",
    marginRight: "50px",
  },
  categoryFilter: {
    position: "relative",
    right: "none",
  },
});

export default HomeScreen;
