import styled from 'styled-components';
import { Theme } from '../../../models/theme';

export const ToDoItem = styled.li<{ theme: Theme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: clamp(0.875rem, 0.825rem + 0.25vw, 1.125rem);
  color: #444;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  border-radius: 12px;
  position: relative;
  box-shadow: 0 1px 2px rgba(44, 62, 80, 0.1);
  padding: 15px;
  margin: 0 0 8px 0;
  word-break: break-word;

  &:last-child {
    margin: 0;
  }
`;

export const ToDoItemText = styled.span``;

export const ToDoItemControls = styled.div`
  display: flex;
`;

export const ToDoItemControl = styled.button<{ icon: string }>`
  width: clamp(2.5rem, 2.375rem + 0.63vw, 3.125rem);
  height: clamp(2.5rem, 2.375rem + 0.63vw, 3.125rem);
  background: transparent url(${(props) => props.icon}) no-repeat center/cover;
  border: 0;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  &:focus {
    border-radius: 12px;
    outline: 1px solid #000000ff;
  }
`;
