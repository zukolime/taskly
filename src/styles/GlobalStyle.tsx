import styled, { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import { Theme } from '../models/theme';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
    ${normalize}

    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    body {          
      font-family: "Delius", cursive;
      font-size: 24px;
      line-height: 1.429;
      color: ${({ theme }) => theme.colors.text};
      background-color: ${({ theme }) => theme.colors.backgroundSecondary};       
    }    
`;

export const MainContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  transition: background-color 0.2s;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 0 auto;
  gap: 8px;
  width: 40%;
  border: 2px solid #6f6f6f;
  border-radius: 4px;
  min-height: 240px;

  &:empty::after {
    content: 'Nothing to do ¯\_(ツ)_/¯';
    width: 100%;
    display: block;
    text-align: center;
    font-size: 14px;
    color: #aaa;
  }
`;
