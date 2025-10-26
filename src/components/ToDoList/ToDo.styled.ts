import styled from 'styled-components';

export const ToDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ToDoListFailed = styled.ul`
  width: 100%;
  padding-left: 0;
  list-style: none;
  border-radius: 12px;

  &:empty::after {
    content: 'Nothing to do — sounds suspicious 🤨';
    width: 100%;
    display: block;
    text-align: center;
    font-size: 14px;
    color: #aaa;
  }
`;

export const ToDoListCompleted = styled.ul`
  width: 100%;
  padding-left: 0;
  list-style: none;
  position: relative;
  padding-top: 50px;

  &:empty::after {
    content: 'No completed tasks...';
    width: 100%;
    display: block;
    text-align: center;
    font-size: 14px;
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
