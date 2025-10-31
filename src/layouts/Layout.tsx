import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Header } from '../components/Header/Header';
import { GlobalStyle, MainContainer } from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';

import { RootState } from '../store';

export const Layout = () => {
  const theme = useSelector((state: RootState) => state.toDoTheme.theme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <MainContainer>
          <Header />
          <Outlet />
        </MainContainer>
      </ThemeProvider>
    </>
  );
};
