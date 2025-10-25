import styled from 'styled-components';
import { Theme } from '../../models/theme';

export const FormWrapper = styled.div<{ theme: Theme }>`
  width: 100%;
  padding: 15px;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  box-shadow: 0 2px 4px rgba(44, 62, 80, 0.15);
  border-radius: 12px;
  transition: background-color 0.2s;
`;

export const FormBlock = styled.form``;

export const FormLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const FormField = styled.input`
  width: 100%;
  color: #000000ff;
  font-size: 15px;
  font-weight: 400;
  padding: 15px;
  background: #ffffff33;
  border-radius: 12px;
  border: 0;
  box-shadow: none;
  outline: 1px solid #000000ff;
`;

export const FormControl = styled.button<{ icon: string }>`
  width: 50px;
  height: 50px;
  background: transparent url(${(props) => props.icon}) no-repeat center/cover;

  border-radius: 12px;
  border: 0;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
