import { HeaderContainer, HeaderNavLink, HeaderWrapper } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderNavLink to='/'>ToDo</HeaderNavLink>
        <HeaderNavLink to='/list'>List</HeaderNavLink>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
