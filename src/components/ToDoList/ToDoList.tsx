import { ToDoListItem } from './ToDoListItem/ToDoListItem';

import './ToDoList.scss';

export const ToDoList = () => {
  return (
    <div className='todo-container'>
      <ul className='todo-list failed'>
        <ToDoListItem />
      </ul>
      <ul className='todo-list completed'>
        <li className='todo-list-item__wrapper'>
          <span>Вторая задача</span>
          <div className='todo-list-item__buttons'>
            <button className='btn-trash'></button>
            <button className='btn-uncheck'></button>
          </div>
        </li>
      </ul>
    </div>
  );
};
