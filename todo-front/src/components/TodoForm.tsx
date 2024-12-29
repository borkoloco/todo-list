"use client";

import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todosSlice";
import { createTodo } from "../api/todoApi";
import { useAuth0 } from "@auth0/auth0-react";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

const Input = styled.input`
  padding: 0.5rem;
  width: 80%;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #61dafb;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #21a1f1;
  }
`;

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") return;

    try {
      const token = await getAccessTokenSilently();
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const newTodo = await createTodo(title, headers);
      dispatch(addTodo(newTodo));
      setTitle("");
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="New task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button type="submit">Add</Button>
    </Form>
  );
}

// "use client";

// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTodo } from "../store/todosSlice";
// import { createTodo } from "../api/todoApi";
// import { useAuth0 } from "@auth0/auth0-react";

// export default function TodoForm() {
//   const [title, setTitle] = useState("");
//   const dispatch = useDispatch();
//   const { getAccessTokenSilently } = useAuth0();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (title.trim() === "") return;

//     try {
//       const token = await getAccessTokenSilently();
//       const headers = {
//         Authorization: `Bearer ${token}`,
//       };
//       const newTodo = await createTodo(title, headers);
//       dispatch(addTodo(newTodo));
//       setTitle("");
//     } catch (error) {
//       console.error("Error creating todo:", error);
//     }
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
