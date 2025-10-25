import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Theme } from '../../models/theme';

export const HeaderWrapper = styled.header<{ theme: Theme }>`
  display: flex;
  align-items: center;
  padding: 15px;
  margin: 15px 0;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderLinkWrapper = styled.nav`
  display: flex;
  gap: 50px;
`;

export const HeaderNavLink = styled(NavLink)<{ theme: Theme }>`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  position: relative;
  transition: 0.3s;

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 2px;
    width: 0%;
    background: ${({ theme }) => theme.colors.accent};
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

export const HeaderThemeSwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderThemeSwitcher = styled.button<{ theme: Theme }>`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: #fff;
  }
`;
