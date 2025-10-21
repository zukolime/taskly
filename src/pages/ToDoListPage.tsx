import { useState } from 'react';
import { Form } from '../components/Form/Form';
import { Header } from '../components/Header/Header';
import { ToDoList } from '../components/ToDoList/ToDoList';
import { ToDo } from '../models/todo-item';

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([
    {
      id: 1,
      text: 'Первая задача',
      isDone: false,
    },
    {
      id: 2,
      text: 'Вторая задача',
      isDone: true,
    },
    {
      id: 3,
      text: 'Третья задача',
      isDone: true,
    },
  ]);

  const createNewToDo = (text: string) => {
    const newToDo: ToDo = {
      id: todos.length,
      text: text,
      isDone: false,
    };

    setTodos([...todos, newToDo]);
  };

  return (
    <>
      <Header />
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todos} />
    </>
  );
};
