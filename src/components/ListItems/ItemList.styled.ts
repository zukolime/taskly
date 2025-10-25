import styled from 'styled-components';

export const ItemLink = styled.a<{ color: string }>`
  text-decoration: none;
  position: relative;
  padding-bottom: 4px;
  color: ${(props) => props.color};

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #6f6f6f;
  }

  &:hover {
    opacity: 0.6;
  }
`;
