import { useQuery } from '@tanstack/react-query';
import { fetchAllTodos } from '@/api';

export const useTodos = () => {
  return useQuery({
    queryKey: ['fetch-all-todos'],
    queryFn: fetchAllTodos,
  });
};
