import { createGlobalStyle } from 'styled-components';
import color from './color';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100vh;
  }

  body {
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 120%;
  }

  strong {
    font-weight: 700;
  }

  a {
    color: ${color.blue};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyle;
