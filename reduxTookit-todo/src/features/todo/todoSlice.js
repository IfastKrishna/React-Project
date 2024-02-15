import { createSlice, nanoid } from "@reduxjs/toolkit";

const getDataFromdb = () => {
  return JSON.parse(localStorage.getItem("todos"));
};

const updateDbdata = (todos) => {
  return localStorage.setItem("todos", JSON.stringify(todos));
};

const initialState = {
  todos: getDataFromdb() || [
    {
      id: nanoid(),
      todoTitle: "first",
      todoDescription: "start",
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  initialState,
  name: "todo",
  reducers: {
    addTodo: (state, action) => {
      const { title, description, completed } = action.payload;
      const todo = {
        id: nanoid(),
        todoTitle: title,
        todoDescription: description,
        completed: false,
      };

      state.todos.push(todo);
      updateDbdata(state.todos);
    },

    updateTodo: (state, action) => {
      const { id, title, description, completed } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { id, title, description, completed } : todo
      );
      updateDbdata(state.todos);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      updateDbdata(state.todos);
    },

    toggleTodoCompleted: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      updateDbdata(state.todos);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, toggleTodoCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
