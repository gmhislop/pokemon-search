import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: ${theme.colors.primary};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.roboto};
    font-weight: 700;
  }

  main {
  min-height: 100vh;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html, body{
  max-width: 100vw;
  overflow-x: hidden;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: 'Roboto', sans-serif;
}

a {
  color: ${theme.colors.link};
  text-decoration: none;
}

::selection {
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
}

a:hover {
  color: ${theme.colors.linkHover};
}

`;

export default GlobalStyle;
