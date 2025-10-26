import { ToDo } from '../../models/todo-item';

import { ItemLink } from './ItemList.styled';

export const ItemList = ({ todo }: { todo: ToDo }) => {
  return (
    <>
      <ItemLink
        color={`${todo.isDone ? '#09b417' : '#f50000ab'}`}
        to={`/list/${todo.id}`}
      >
        {todo.text}
      </ItemLink>
    </>
  );
};
