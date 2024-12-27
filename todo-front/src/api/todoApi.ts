import { ValidationErrorResponse } from "./types";

const BASE_URL = "http://localhost:5001/api/todos";

interface ITodo {
  _id: string;
  title: string;
  status?: boolean;
}

export const fetchTodos = async (
  headers: Record<string, string>
): Promise<ITodo[]> => {
  console.log(headers);
  const response = await fetch(BASE_URL, {
    headers,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
};

export const createTodo = async (
  todoTitle: string,
  headers: Record<string, string>
): Promise<ITodo> => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify({ title: todoTitle }),
  });

  if (!response.ok) {
    const errorData: ValidationErrorResponse = await response.json();
    if (response.status === 400) {
      console.error("Validation Error:", errorData);
      throw new Error(
        `Validation failed: ${errorData.errors
          .map((err) => err.message)
          .join(", ")}`
      );
    }
    throw new Error("Failed to create todo");
  }

  return response.json();
};

export const updateTodoApi = async (
  id: string,
  updatedTodoTitle: string,
  headers: Record<string, string>
): Promise<ITodo> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify({ title: updatedTodoTitle }),
  });

  if (!response.ok) {
    throw new Error("Failed to update todo");
  }

  return response.json();
};

export const deleteTodoApi = async (
  id: string,
  headers: Record<string, string>
): Promise<void> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers,
  });

  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }
};
