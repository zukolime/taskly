import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Form } from '../components/Form/Form';
import { ToDoList } from '../components/ToDoList/ToDoList';
import { ToDo } from '../models/todo-item';
import { RootState } from '../store';

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const toDoList = useSelector((state: RootState) => state.toDoList.todos);

  const createNewToDo = (text: string) => {
    const newToDo: ToDo = {
      id: todos.length,
      text: text,
      isDone: false,
    };

    setTodos([...todos, newToDo]);
  };

  const updateToDo = (toDoItem: ToDo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === toDoItem.id) {
        todo.isDone = !todo.isDone;
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const deleteToDo = (toDoItem: ToDo) => {
    const newTodos = todos.filter((todo) => todo.id !== toDoItem.id);
    setTodos(newTodos);
  };

  return (
    <>
      <Form createNewToDo={createNewToDo} />
      <ToDoList
        todos={toDoList}
        updateToDo={updateToDo}
        deleteToDo={deleteToDo}
      />
    </>
  );
};
