import { useDispatch, useSelector } from 'react-redux';

import { Form } from '../components/Form/Form';
import { ToDoList } from '../components/ToDoList/ToDoList';
import { ToDo } from '../models/todo-item';
import { RootState } from '../store';
import { deleteAction, updateAction } from '../features/toDoListSlice';

export const ToDoListPage = () => {
  const toDoList = useSelector((state: RootState) => state.toDoList.todos);
  const dispatch = useDispatch();

  const updateToDo = (toDoItem: ToDo) => {
    dispatch(updateAction(toDoItem));
  };

  const deleteToDo = (toDoItem: ToDo) => {
    dispatch(deleteAction(toDoItem));
  };

  return (
    <>
      <Form />
      <ToDoList
        todos={toDoList}
        updateToDo={updateToDo}
        deleteToDo={deleteToDo}
      />
    </>
  );
};
