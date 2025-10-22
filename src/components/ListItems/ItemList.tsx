import { Link } from 'react-router-dom';
import { ToDo } from '../../models/todo-item';

import classes from './ItemList.module.scss';

export const ItemList = ({ todo }: { todo: ToDo }) => {
  return (
    <>
      <Link
        className={`${classes.link} ${
          todo.isDone ? classes.done : classes.undone
        }`}
        to={`/list/${todo.id}`}
      >
        {todo.text}
      </Link>
    </>
  );
};
