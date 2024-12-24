"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { updateTodo, deleteTodo } from "../store/todosSlice";
import { updateTodoApi, deleteTodoApi } from "../api/todoApi";

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleEdit = async (id: string, updatedTitle: string) => {
    try {
      const updatedTodo = await updateTodoApi(id, updatedTitle); // Update todo via API
      dispatch(updateTodo(updatedTodo)); // Update the todo in Redux store
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTodoApi(id); // Delete todo via API
      dispatch(deleteTodo(id)); // Remove the todo from Redux store
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          <input
            type="text"
            value={todo.title}
            onChange={(e) => handleEdit(todo._id, e.target.value)} // Edit todo title
          />
          <button onClick={() => handleDelete(todo._id)}>Delete</button>{" "}
          {/* Delete todo */}
        </li>
      ))}
    </ul>
  );
}

// "use client";

// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../store/store";
// import { updateTodo, deleteTodo } from "../store/todosSlice";
// import { updateTodoApi, deleteTodoApi } from "../api/todoApi";

// export default function TodoList() {
//   const todos = useSelector((state: RootState) => state.todos.todos);
//   const dispatch = useDispatch();

//   const handleEdit = async (id: string, updatedTitle: string) => {
//     const updatedTodo = await updateTodoApi(id, updatedTitle);
//     dispatch(updateTodo(updatedTodo));
//   };

//   const handleDelete = async (id: string) => {
//     await deleteTodoApi(id);
//     dispatch(deleteTodo(id));
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
//           <button onClick={() => handleDelete(todo._id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// }
