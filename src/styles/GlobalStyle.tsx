import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import { Theme } from '../models/model';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
    ${normalize}

    * {
      box-sizing: border-box;
    }

    body {
      background-color: ${({ theme }) => theme.colors.backgroundSecondary};
      padding: 50px 0 0 0;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      line-height: 1.429;
      color: black;
      transition: background-color 0.2s;
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }
`;
