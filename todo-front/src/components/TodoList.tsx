import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.title}</span>
        </li>
      ))}
    </ul>
  );
}
