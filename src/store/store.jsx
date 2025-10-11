import { createSlice, configureStore } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      title: "Grocery Shopping",
      notes: "Buy milk, eggs, bread, and fruits.",
      date: "2025-10-01",
      completed: true,
    },
    {
      id: 2,
      title: "Workout",
      notes: "Gym session – legs and cardio.",
      date: "2025-10-02",
      completed: false,
    },
    {
      id: 3,
      title: "Project Meeting",
      notes: "Discuss new features with the dev team.",
      date: "2025-10-03",
      completed: false,
    },
    {
      id: 4,
      title: "Doctor Appointment",
      notes: "Annual health checkup at 10 AM.",
      date: "2025-10-04",
      completed: false,
    },
    {
      id: 5,
      title: "Read Book",
      notes: "Finish reading 2 chapters of 'Atomic Habits'.",
      date: "2025-10-05",
      completed: true,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        title: action.payload.title,
        notes: action.payload.notes,
        date: action.payload.date,
        completed: false,
      });
    },
    editTodo: (state, action) => {
      const { id, title, notes, date } = action.payload;
      const existingTodo = state.find(todo => todo.id === id);
      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.notes = notes;
        existingTodo.date = date;
      }
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todoSlice.actions;

export const store = configureStore({
  reducer: { todo: todoSlice.reducer },
});
