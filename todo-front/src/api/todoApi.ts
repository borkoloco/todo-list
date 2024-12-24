const BASE_URL = "http://localhost:5001/api/todos";

interface ITodo {
  _id: string;
  title: string;
  status?: boolean;
}

export const fetchTodos = async (): Promise<ITodo[]> => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
};

export const createTodo = async (todoTitle: string): Promise<ITodo> => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: todoTitle }),
  });

  if (!response.ok) {
    throw new Error("Failed to create todo");
  }

  return response.json();
};

export const updateTodoApi = async (
  id: string,
  updatedTodoTitle: string
): Promise<ITodo> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: updatedTodoTitle }),
  });

  if (!response.ok) {
    throw new Error("Failed to update todo");
  }

  return response.json();
};

export const deleteTodoApi = async (id: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }
};

// const BASE_URL = "http://localhost:5001/api/todos";

// interface ITodo {
//   _id: string;
//   title: string;
//   status?: boolean;
// }

// export const fetchTodos = async (): Promise<ITodo[]> => {
//   const response = await fetch(BASE_URL);
//   if (!response.ok) {
//     throw new Error("Failed to fetch todos");
//   }
//   return response.json();
// };

// export const createTodo = async (todoTitle: string): Promise<ITodo> => {
//   const response = await fetch(BASE_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ title: todoTitle }),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to create todo");
//   }

//   return response.json();
// };

// export const updateTodoApi = async (
//   id: string,
//   updatedTodoTitle: string
// ): Promise<ITodo> => {
//   const response = await fetch(`${BASE_URL}/${id}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ title: updatedTodoTitle }),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to update todo");
//   }

//   return response.json();
// };

// export const deleteTodoApi = async (id: string): Promise<void> => {
//   const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
//   if (!response.ok) {
//     throw new Error("Failed to delete todo");
//   }
// };
