import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type Todo = {
  id: number;
  content: string;
  isCompleted: boolean;
};

type State = { todos: Todo[] };

type Actions = {
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
};

export const useTodoStore = create(
  immer<State & Actions>((set) => ({
    todos: [],
    addTodo: (todo) =>
      set((state) => {
        state.todos.push(todo);
      }),
    deleteTodo: (id) =>
      set((state) => {
        const deleteIndex = state.todos.findIndex((todo) => todo.id === id);
        state.todos.splice(deleteIndex, 1);
      }),
  })),
);
