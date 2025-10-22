import { ItemList } from '../components/ListItems/ItemList';
import { ToDo } from '../models/todo-item';

export const HomePage = (props: { todos: ToDo[] }) => {
  return (
    <div className='container'>
      {props.todos.map((todo: ToDo) => {
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
