import styled from 'styled-components';

export const ItemLink = styled.a<{ color: string }>`
  text-decoration: none;
  padding: 10px;
  color: ${(props) => props.color};

  &:hover {
    opacity: 0.6;
  }
`;
