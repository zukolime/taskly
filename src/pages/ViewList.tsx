import { useSelector } from 'react-redux';

import { ItemList } from '../components/ListItems/ItemList';
import { RootState } from '../store';
import { ToDo } from '../models/todo-item';

export const ViewList = () => {
  const toDoList = useSelector((state: RootState) => state.toDoList.todos);

  return (
    <div className='container'>
      {toDoList.map((todo: ToDo) => {
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
