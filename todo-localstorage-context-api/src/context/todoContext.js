import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, title: "todo Msg", complete: false }],
  addTodo: (todo) => {},
  updatedTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
