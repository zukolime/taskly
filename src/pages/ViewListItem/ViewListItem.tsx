import { useEffect, useState } from 'react';
import { ToDo } from '../../models/todo-item';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Container } from '../../styles/GlobalStyle';
import { ViewListItemBackLink, ViewListItemTitle } from './ViewListItem.styled';

export const ViewListItem = () => {
  const toDoList = useSelector((state: RootState) => state.toDoList.todos);
  const { id }: any = useParams();
  const [todo, setTodo] = useState<ToDo>();
  const navigate = useNavigate();

  useEffect(() => {
    const searchTodo = toDoList.find((todo) => String(todo.id) === id);

    if (searchTodo) {
      setTodo(searchTodo);
    } else {
      navigate('/404');
    }
  }, [toDoList, id, navigate]);

  return (
    <>
      <Container>
        <ViewListItemTitle>{todo?.text}</ViewListItemTitle>
      </Container>
      <ViewListItemBackLink to={'/list'}> ← Back</ViewListItemBackLink>
    </>
  );
};
