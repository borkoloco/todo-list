"use client";

import { Form, Input, Button, Card } from "./styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todosSlice";
import { createTodo } from "../api/todoApi";
import { useAuth0 } from "@auth0/auth0-react";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") return;

    try {
      const token = await getAccessTokenSilently();
      const headers = { Authorization: `Bearer ${token}` };
      const newTodo = await createTodo(title, headers);
      dispatch(addTodo(newTodo));
      setTitle("");
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="New todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button type="submit" color="#28a745">
          Add
        </Button>
      </Form>
    </Card>
  );
}
