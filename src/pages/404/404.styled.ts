import styled from 'styled-components';
import { Theme } from '../../models/theme';
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70vh;
`;

export const NotFoundWrapper = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px;
  border: 3px solid ${({ theme }) => theme.colors.backgroundPrimary};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
`;

export const NotFoundTitle = styled.h1<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const NotFoundLink = styled(Link)<{ theme: Theme }>`
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 8px;

  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => (theme.name === 'light' ? 'green' : 'pink')};
  }
`;
