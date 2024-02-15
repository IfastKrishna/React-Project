import { useEffect, useState } from "react";
import { ThemeBtn, TodoInput, TodoItem } from "./components";
import { ThemeProvider, TodoProvider } from "./context";

function App() {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("themeMode") || "light"
  );

  const lightMode = () => {
    return setThemeMode("light");
  };

  const darkMode = () => {
    return setThemeMode("dark");
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("dark", "light");
    html.classList.add(themeMode);
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || [
      { id: 1, title: "msg", complete: false },
    ]
  );

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updatedTodo = (id, todo) => {
    setTodos((prev) => {
      return prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo));
    });
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
        <TodoProvider
          value={{ todos, addTodo, deleteTodo, updatedTodo, toggleComplete }}
        >
          <div className="bg-white dark:bg-black h-screen w-full py-10">
            <div className="mb-3 backdrop-opacity-10 backdrop-invert bg-indigo-600/3 dark:bg-slate-800 max-w-xl p-6 rounded-lg mx-auto">
              <ThemeBtn />
              <TodoInput />
            </div>
            <div className="flex flex-wrap gap-y-3 backdrop-opacity-10 backdrop-invert bg-indigo-600/3 max-h-96 dark:bg-slate-800 max-w-xl p-6 rounded-lg mx-auto overflow-y-auto">
              {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </div>
          </div>
        </TodoProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
