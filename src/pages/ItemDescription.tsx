import { useEffect, useState } from 'react';
import { ToDo } from '../models/todo-item';
import { useParams, useHistory } from 'react-router-dom';

interface ComponentProps {
  todos: ToDo[];
}

export const ItemDescription = ({ todos }: ComponentProps) => {
  const { id }: any = useParams();
  const [todo, setTodo] = useState<ToDo>();
  const history = useHistory();

  useEffect(() => {
    const searchTodo = todos.find((todo) => String(todo.id) === id);

    if (searchTodo) {
      setTodo(searchTodo);
    } else {
      history.replace('/404');
    }
  }, [todos, id, history]);

  return (
    <div className='container'>
      <h1>{todo?.text}</h1>
    </div>
  );
};
