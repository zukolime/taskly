import { useEffect, useState } from 'react';
import { ToDo } from '../models/todo-item';
import { useParams, useNavigate } from 'react-router-dom';

interface ComponentProps {
  todos: ToDo[];
}

export const ItemDescription = ({ todos }: ComponentProps) => {
  const { id }: any = useParams();
  const [todo, setTodo] = useState<ToDo>();
  const navigate = useNavigate();

  useEffect(() => {
    const searchTodo = todos.find((todo) => String(todo.id) === id);

    if (searchTodo) {
      setTodo(searchTodo);
    } else {
      navigate('/404');
    }
  }, [todos, id, navigate]);

  return (
    <div className='container'>
      <h1>{todo?.text}</h1>
    </div>
  );
};
