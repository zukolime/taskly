import { Link } from 'react-router-dom';
import { ToDo } from '../../models/todo-item';

import classes from './ItemList.module.scss';

export const ItemList = ({ todo }: { todo: ToDo }) => {
  return (
    <>
      <a
        className={`${classes.link} ${
          todo.isDone ? classes.done : classes.undone
        }`}
        target='_blank'
        rel='noreferrer'
        href={`/list/${todo.id}`}
      >
        {todo.text}
      </a>
    </>
  );
};
