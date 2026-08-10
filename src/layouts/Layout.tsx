import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { Header } from '../components/Header/Header';
import { GlobalStyle, MainContainer } from '../styles/GlobalStyle';

import { Footer } from '../components/Footer/Footer';
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
          <Footer />
        </MainContainer>
      </ThemeProvider>
    </>
  );
};
