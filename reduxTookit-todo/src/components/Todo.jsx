import { useDispatch } from "react-redux";
import {
  updateTodo,
  deleteTodo,
  toggleTodoCompleted,
} from "../features/todo/todoSlice";
import { useEffect, useState } from "react";

function Todo({ todo }) {
  const dispatch = useDispatch();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleToggleCompleted = () => {
    dispatch(toggleTodoCompleted(todo.id));
  };

  const handleEdit = () => {
    if (isTodoEditable) {
      dispatch(updateTodo({ ...todo, title: title, description: description }));
    }
    setIsTodoEditable(!isTodoEditable);
  };
  useEffect(() => {
    setTitle(todo.title);
    setDescription(todo.description);
  }, []);

  return (
    <div
      className={`flex flex-col gap-y-5 py-4 px-3 w-80 rounded-md text-white dark:bg-indigo-600/50`}
    >
      <div className="flex justify-between items-center">
        <input
          type="checkbox"
          className="cursor-pointer accent-zinc-50 scale-150"
          value=""
          onChange={handleToggleCompleted}
          checked={todo.completed}
        />
        <div className="flex justify-between items-center">
          <button
            className={`inline-flex mx-3 w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50`}
            onClick={handleEdit}
            disabled={todo.completed}
          >
            {isTodoEditable ? "📁" : "✏️"}
          </button>
          <button
            className={`inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0`}
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            ❌
          </button>
        </div>
      </div>
      <input
        className={`border py-3 outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        type="text"
        placeholder="Write Task title"
        value={title}
        readOnly={!isTodoEditable}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className={`border outline-none py-3 w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        placeholder="Write Task description"
        value={description}
        readOnly={!isTodoEditable}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
}

export default Todo;
