import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { useState } from "react";

function AddTodo() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({ title: "", description: "" });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setTodo((state) => ({ ...state, [name]: value }));
  };

  const createTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo({ title: "", description: "" });
  };

  return (
    <form
      onSubmit={createTodo}
      className="flex flex-col gap-y-5 py-4 px-3 w-80 rounded-md bg-slate-800 text-white dark:bg-indigo-600"
    >
      <input
        className="w-full outline-1 outline-white/55 py-2 px-1 rounded text-black"
        type="text"
        name="title"
        placeholder="Writer Task title"
        value={todo.title}
        onChange={handleChangeInput}
      />
      <textarea
        className="w-full outline-1 outline-white/55 py-2 px-1 rounded text-black"
        type="text"
        placeholder="Write Task description"
        name="description"
        value={todo.description}
        onChange={handleChangeInput}
      />
      <button
        type="submit"
        className="w-full bg-gray-600 text-white/50 ring-1 focus:ring-inset focus:ring-white py-2 rounded"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
