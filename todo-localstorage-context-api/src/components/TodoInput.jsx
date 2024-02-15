import React, { useState } from "react";
import { useTodo } from "../context";

function TodoInput() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (todo !== "") {
      addTodo({ title: todo, complete: false });
      setTodo("");
    } else {
      alert("Todo is empty");
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={add}>
        <div className="flex">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="w-full p-2 rounded-l-xl bg-transparent border-2 dark:text-white border-slate-700"
          />
          <button
            type="submit"
            className="p-2 px-4 bg-slate-700 text-white dark:text-slate-700 dark:bg-white font-bold rounded-r-xl"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoInput;
