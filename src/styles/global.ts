import { createGlobalStyle } from "styled-components";
import firaCode from "../assets/font/FiraCode-Regular.woff"

export const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'FiraCode';
      src: url(${firaCode}) format('woff');
      font-weight: 400;
      font-style: normal;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
    background: ${({ theme }) => theme.colors["base-background"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
    }
  
    body, input, textarea, button {
        font: 400 ${({ theme }) => theme.textSizes["text-text-m"]} 'Nunito', sans-serif;
      line-height: 160%;
    }

    ul {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        width: 0.45rem;
    }
    
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors["base-border"]}
    }
    
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors["brand-blue"]};
      border-radius: 999px;
    }
`