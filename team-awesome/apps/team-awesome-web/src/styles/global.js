import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Proxima Nova';
        src: url('/fonts/proxima-nova-regular.woff');
        font-weight: 400;
    }
    
    @font-face {
        font-family: 'Bello';
        src: url('/fonts/bello-script.ttf');
        font-weight: 400;
    }
    
    // :root {
    //     --blue-1: ;
    //     --grey-1: #FFFFFF;
    //     --grey-2: #F5F7F9;
    // }
    
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
        text-decoration: none;
        color: inherit;
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