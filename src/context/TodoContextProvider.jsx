import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useRef,
} from "react";
import { data } from "../data";
import { reducer } from "../reducer/reducer";

const TodoContext = createContext();

export const useTodoContextApi = () => {
  return useContext(TodoContext);
};

const TodoContextProvider = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState(1);

  const [searchList, setSearchList] = useState([
    {
      id: 2,
      category: "School",
      items: [],
    },
  ]);

  // category title
  const [categoryTitle, setCategoryTitle] = useState("");

  // TODO title
  const [todoTitle, setTodoTitle] = useState("");
  const [todoCategory, setTodoCategory] = useState(1);

  // control sidebar
  const [open, setOpen] = useState(false);

  // search
  const [search, setSearch] = useState("");

  // useReducer
  const [todos, dispatch] = useReducer(reducer, data);

  // get current category list
  const currentTodos = todos.filter((item) => item.id === currentCategory);

  // get active todos

  const activeTodos = currentTodos.map((cat) => {
    return {
      ...cat,
      items: cat.items.filter((item) => item.complete === false),
    };
  });

  const searchTask = (e) => {
    e.preventDefault();

    const filtered = currentTodos.map((cat) => {
      return {
        ...cat,
        items: cat.items.filter(
          (item) =>
            typeof item.title === "string" && item.title.includes(search)
        ),
      };
    });

    setSearchList(filtered);
    console.log(searchList);
  };

  // get completed todos
  const completedTodos = currentTodos.map((cat) => {
    return {
      ...cat,
      items: cat.items.filter((item) => item.complete === true),
    };
  });
  const initialRef = useRef(null);

  return (
    <TodoContext.Provider
      value={{
        currentCategory,
        setCurrentCategory,
        currentTodos,
        todos,
        dispatch,
        categoryTitle,
        setCategoryTitle,
        todoTitle,
        setTodoTitle,
        todoCategory,
        setTodoCategory,
        open,
        setOpen,
        initialRef,
        completedTodos,
        activeTodos,
        search,
        setSearch,
        searchTask,
        searchList,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
