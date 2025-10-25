import { ToDoListItem } from './ToDoListItem/ToDoListItem';
import { ToDo } from '../../models/todo-item';
import {
  ToDoContainer,
  ToDoListFailed,
  ToDoListCompleted,
} from './ToDo.styled';

export const ToDoList = (props: {
  todos: ToDo[];
  updateToDo: Function;
  deleteToDo: Function;
}) => {
  const activeTodos = props.todos.filter((item) => !item.isDone);
  const completedTodos = props.todos.filter((item) => item.isDone);

  return (
    <ToDoContainer>
      <ToDoListFailed>
        {activeTodos.map((item) => (
          <ToDoListItem
            key={item.id}
            toDoItem={item}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        ))}
      </ToDoListFailed>

      <ToDoListCompleted>
        {completedTodos.map((item) => (
          <ToDoListItem
            key={item.id}
            toDoItem={item}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        ))}
      </ToDoListCompleted>
    </ToDoContainer>
  );
};
