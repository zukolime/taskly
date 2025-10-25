import { useDispatch } from 'react-redux';
import {
  HeaderContainer,
  HeaderLinkWrapper,
  HeaderNavLink,
  HeaderThemeSwitcher,
  HeaderThemeSwitcherWrapper,
  HeaderWrapper,
} from './Header.styled';
import { toggleThemeAction } from '../../features/themeSlice';

export const Header = () => {
  const disptach = useDispatch();

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLinkWrapper>
          <HeaderNavLink to='/'>ToDo</HeaderNavLink>
          <HeaderNavLink to='/list'>List</HeaderNavLink>
        </HeaderLinkWrapper>

        <HeaderThemeSwitcherWrapper>
          <HeaderThemeSwitcher onClick={() => disptach(toggleThemeAction())}>
            Switch theme
          </HeaderThemeSwitcher>
        </HeaderThemeSwitcherWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
