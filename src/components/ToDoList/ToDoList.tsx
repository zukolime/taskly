import { ToDoListItem } from './ToDoListItem/ToDoListItem';

import { ToDo } from '../../models/todo-item';

import './ToDoList.scss';

export const ToDoList = (props: { todos: ToDo[] }) => {
  const checkedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item, id) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={id}
          />
        );
      });
  };

  const uncheckedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item, id) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={id}
          />
        );
      });
  };

  return (
    <div className='todo-container'>
      <ul className='todo-list failed'>{checkedList()}</ul>
      <ul className='todo-list completed'>{uncheckedList()}</ul>
    </div>
  );
};
