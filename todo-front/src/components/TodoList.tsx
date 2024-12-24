"use client";

import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <span>{todo.title}</span>
        </li>
      ))}
    </ul>
  );
}
