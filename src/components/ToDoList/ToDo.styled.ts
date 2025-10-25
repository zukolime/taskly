import styled from 'styled-components';

export const ToDoContainer = styled.div`
  width: 100%;
  padding: 15px;
`;

export const ToDoListFailed = styled.ul`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 0;
  list-style: none;

  &:empty::after {
    content: 'Нет задач на выполнение';
    width: 100%;
    display: block;
    text-align: center;
    font-size: 12px;
    color: #aaa;
  }
`;

export const ToDoListCompleted = styled.ul`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 0;
  list-style: none;
  position: relative;
  padding-top: 60px;

  &:empty::after {
    content: 'Нет выполненных задач';
    width: 100%;
    display: block;
    text-align: center;
    font-size: 12px;
    color: #aaa;
  }

  &::before {
    content: '';
    width: 150px;
    height: 1px;
    background: #d8e5e0;
    position: absolute;
    top: 25px;
    left: calc(50% - 75px);
  }
`;
