import { useTodoStore } from "@/stores";
import { useTodos } from "@/pages/Home/hooks";
import { faker } from "@faker-js/faker";

export const useTodoList = () => {
  const localTodos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const serverTodos = useTodos();

  const handleAddTodo = () =>
    addTodo({
      id: Math.floor(Math.random() * 10000),
      content: faker.lorem.sentence(10),
      isCompleted: false,
    });

  return {
    localTodos,
    serverTodos,
    handleAddTodo,
  };
};
