import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITodo {
  _id: string;
  title: string;
  status?: boolean;
}

interface TodosState {
  todos: ITodo[];
}

const initialState: TodosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action: PayloadAction<ITodo>) => {
      const index = state.todos.findIndex(
        (todo) => todo._id === action.payload._id
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
