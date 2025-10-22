import { ItemList } from '../components/ListItems/ItemList';
import { ToDo } from '../models/todo-item';

interface ComponentProps {
  todos: ToDo[];
}

export const HomePage = ({ todos }: ComponentProps) => {
  return (
    <div className='container'>
      {todos.map((todo: ToDo) => {
        return (
          <ItemList
            todo={todo}
            key={todo.id}
          />
        );
      })}
    </div>
  );
};
