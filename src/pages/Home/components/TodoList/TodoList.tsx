import { Fragment } from 'react';
import { useTodoList } from '@/pages/Home/hooks';

const TodoList = () => {
  const { localTodos, handleAddTodo } = useTodoList();

  return (
    <Fragment>
      <button onClick={handleAddTodo}>Add Local Todo</button>
      <h3>Local Todos</h3>
      <pre>{JSON.stringify(localTodos)}</pre>
      {/* <h3>Server Todos</h3>
      <ul>
        {serverTodos.data.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul> */}
    </Fragment>
  );
};

export default TodoList;
