import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  border: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body {
    transition: 0.3s ease;
    background-color: #F7F7F7;
    color: #555;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

`;
