import { Form } from '../components/Form/Form';
import { Header } from '../components/Header/Header';
import { ToDoList } from '../components/ToDoList/ToDoList';
import { ToDo } from '../models/todo-item';

export const ToDoListPage = () => {
  const todos: ToDo[] = [
    {
      id: 1,
      text: 'Первая задача',
      isDone: false,
    },
    {
      id: 1,
      text: 'Вторая задача',
      isDone: true,
    },
  ];

  return (
    <>
      <Header />
      <Form />
      <ToDoList todos={todos} />
    </>
  );
};
