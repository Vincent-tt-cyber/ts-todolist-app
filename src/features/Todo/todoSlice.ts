import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../types";

const initialState: Todo[] = [
  {
    id: 1,
    title: "Learn React with Typescript",
    completed: false,
  }
];

const todoSlice = createSlice({
  name: "@todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      return [...state, newTodo];
    },
    toggleTodo: (state, action: PayloadAction<Todo["id"]>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action: PayloadAction<Todo["id"]>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
