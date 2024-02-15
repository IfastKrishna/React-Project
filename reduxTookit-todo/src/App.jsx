import AddTodo from "./components/AddTodo";
import { useSelector } from "react-redux";
import Todo from "./components/Todo";

function App() {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="p-10 flex flex-wrap gap-5">
      <AddTodo />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={{
            title: todo.todoTitle,
            description: todo.todoDescription,
            id: todo.id,
            completed: todo.completed,
          }}
        />
      ))}
    </div>
  );
}

export default App;
