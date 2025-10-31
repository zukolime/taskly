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
  font-size: clamp(0.75rem, 0.713rem + 0.19vw, 0.938rem);
  font-weight: 400;
  padding: 15px;
  background: #ffffff33;
  border-radius: 12px;
  border: 0;
  box-shadow: none;
  border: 1px solid #000000ff;

  &:focus {
    border-radius: 12px;
    outline: none;
    box-shadow: 0px 0px 4px 3px #b3adad;
  }
`;

export const FormControl = styled.button<{ icon: string }>`
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
