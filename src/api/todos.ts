import { client } from '@/api';

const TODOS_ENDPOINTS = { fetchAllTodos: '/todos' };

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const fetchAllTodos = async () => {
  const response = await client.get({
    url: TODOS_ENDPOINTS.fetchAllTodos,
  });
  return response.data as Todo[];
};
