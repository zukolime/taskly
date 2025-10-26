import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Theme } from '../../models/theme';

export const ViewListItemTitle = styled.h3``;

export const ViewListItemBackLink = styled(Link)<{ theme: Theme }>`
  display: block;
  margin: 20px 0;

  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => (theme.name === 'light' ? 'green' : 'pink')};
  }
`;
