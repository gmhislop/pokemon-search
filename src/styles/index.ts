import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: ${theme.colors.primary};
  }

  body {
    background-color: var(--background-color);
    color: ${theme.colors.text};
    font-family: ${theme.fonts.roboto};
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.roboto};
    font-weight: 700;
  }
`;

export default GlobalStyle;
