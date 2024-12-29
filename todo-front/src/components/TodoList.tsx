"use client";

import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { updateTodo, deleteTodo } from "../store/todosSlice";
import { updateTodoApi, deleteTodoApi } from "../api/todoApi";
import { useAuth0 } from "@auth0/auth0-react";

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
`;

const TodoInput = styled.input`
  width: 80%;
  padding: 0.5rem;
`;

const Button = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #c0392b;
  }
`;

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();

  const handleEdit = async (id: string, updatedTitle: string) => {
    try {
      const token = await getAccessTokenSilently();
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const updatedTodo = await updateTodoApi(id, updatedTitle, headers);
      dispatch(updateTodo(updatedTodo));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const token = await getAccessTokenSilently();
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await deleteTodoApi(id, headers);
      dispatch(deleteTodo(id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo._id}>
          <TodoInput
            type="text"
            value={todo.title}
            onChange={(e) => handleEdit(todo._id, e.target.value)}
          />
          <Button onClick={() => handleDelete(todo._id)}>Delete</Button>
        </TodoItem>
      ))}
    </ul>
  );
}

// "use client";

// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../store/store";
// import { updateTodo, deleteTodo } from "../store/todosSlice";
// import { updateTodoApi, deleteTodoApi } from "../api/todoApi";
// import { useAuth0 } from "@auth0/auth0-react";

// export default function TodoList() {
//   const todos = useSelector((state: RootState) => state.todos.todos);
//   const dispatch = useDispatch();
//   const { getAccessTokenSilently } = useAuth0();

//   const handleEdit = async (id: string, updatedTitle: string) => {
//     try {
//       const token = await getAccessTokenSilently();
//       const headers = {
//         Authorization: `Bearer ${token}`,
//       };
//       const updatedTodo = await updateTodoApi(id, updatedTitle, headers);
//       dispatch(updateTodo(updatedTodo));
//     } catch (error) {
//       console.error("Error updating todo:", error);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     try {
//       const token = await getAccessTokenSilently();
//       const headers = {
//         Authorization: `Bearer ${token}`,
//       };
//       await deleteTodoApi(id, headers);
//       dispatch(deleteTodo(id));
//     } catch (error) {
//       console.error("Error deleting todo:", error);
//     }
//   };

//   return (
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo._id}>
//           <input
//             type="text"
//             value={todo.title}
//             onChange={(e) => handleEdit(todo._id, e.target.value)}
//           />
//           <button onClick={() => handleDelete(todo._id)}>Delete</button>{" "}
//         </li>
//       ))}
//     </ul>
//   );
// }
