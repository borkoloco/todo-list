import ProtectedRoute from "@/components/ProtectedRoute";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <ProtectedRoute>
      <div>
        <h1>What will be your next todo?</h1>
        <TodoForm />
        <TodoList />
      </div>
    </ProtectedRoute>
  );
}
