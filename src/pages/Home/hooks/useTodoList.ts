import { useTodoStore } from '@/stores';
import { useTodos } from '@/pages/Home/hooks';

export const useTodoList = () => {
  const localTodos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const serverTodos = useTodos();

  const handleAddTodo = () =>
    addTodo({
      id: Math.floor(Math.random() * 10000),
      content: 'New todo content...',
      isCompleted: false,
    });

  return {
    localTodos,
    serverTodos,
    handleAddTodo,
  };
};
