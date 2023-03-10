import { Fragment } from 'react';
import { useTodoList } from '@/pages/Home/hooks';

const TodoList = () => {
  const { localTodos, serverTodos, handleAddTodo } = useTodoList();

  return (
    <Fragment>
      <button onClick={handleAddTodo}>Add Local Todo</button>
      <h3>Local Todos</h3>
      <pre>{JSON.stringify(localTodos)}</pre>
      <h3>Server Todos</h3>
      {serverTodos.isLoading ? <p>Loading...</p> : null}
      {serverTodos.isError ? <p>Error!</p> : null}
      {serverTodos.data ? <pre>{JSON.stringify(serverTodos.data)}</pre> : null}
      {serverTodos.data ? (
        <ul>
          {serverTodos.data.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      ) : null}
    </Fragment>
  );
};

export default TodoList;
