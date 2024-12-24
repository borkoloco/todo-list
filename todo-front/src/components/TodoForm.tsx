"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todosSlice";
import { createTodo } from "../api/todoApi"; // Import the API function

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") return; // Avoid empty todos

    try {
      const newTodo = await createTodo(title); // Create the todo via API
      dispatch(addTodo(newTodo)); // Add the todo to the Redux store
      setTitle(""); // Clear the input field
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

// "use client";

// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTodo } from "../store/todosSlice";

// export default function TodoForm() {
//   const [title, setTitle] = useState("");
//   const dispatch = useDispatch();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newTodo = { _id: "temp-id", title, status: false };
//     dispatch(addTodo(newTodo));
//     setTitle("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="New task..."
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// }
