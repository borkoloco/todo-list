import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
