import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Proxima Nova';
        font-weight: 400;
        src: url('/fonts/proxima-nova-regular.woff');
    }
    
    @font-face {
        font-family: 'Bello';
        font-weight: 400;
        src: url('/fonts/bello-script.ttf');
    }
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        background-color: #F5F7F9;
        box-sizing: border-box;
        font-family: 'Proxima Nova', Arial, Helvetica, sans-serif;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }
    
    button {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        outline: inherit;
    }
`;

export default GlobalStyle;
