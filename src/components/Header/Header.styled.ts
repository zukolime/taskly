import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: #4682b4; 
  color: #fff;
  display: flex;
  align-items: center;
}`;

export const HeaderContainer = styled.div`
  color: #fff;
  max-width: 97%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLinkWrapper = styled.div``;

export const HeaderNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  color: #fff;

  &.active {
    color: #ffd700;
    font-weight: bold;
    border-bottom: 2px solid #ffd700;
  }
`;

export const HeaderThemeSwitcherWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

export const HeaderThemeSwitcher = styled.div`
  padding: 8px;
  border: 2px solid #ffd700;
  border-radius: 4px;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: invert(100%);
  }
`;
