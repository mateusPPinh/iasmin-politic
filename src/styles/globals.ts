import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul, li {
    list-style: none;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: #372B37;
    -webkit-font-smoothing: antialiased;
  }

  section {
    padding: 30px 70px;
  }
`;