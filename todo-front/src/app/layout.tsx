"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../api/todoApi";
import { addTodo } from "../store/todosSlice";

function TodosLoader({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadTodos = async () => {
      const todos = await fetchTodos();
      todos.forEach((todo) => dispatch(addTodo(todo)));
    };

    loadTodos();
  }, [dispatch]);

  return <>{children}</>;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <TodosLoader>{children}</TodosLoader>
        </Provider>
      </body>
    </html>
  );
}
