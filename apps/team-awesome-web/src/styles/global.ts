import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Proxima Nova';
        font-weight: 400;
        src: url('/fonts/proxima-nova-light.ttf');
    }

    @font-face {
        font-family: 'Proxima Nova';
        font-weight: 600;
        src: url('/fonts/proxima-nova-regular.woff');
    }
    
    @font-face {
        font-family: 'Proxima Nova';
        font-weight: 800;
        src: url('/fonts/proxima-nova-bold.ttf');
    }
    
    @font-face {
        font-family: 'Bello Script';
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
    
    html {
        overflow: scroll;
        width: 100vw;
    }

    textarea {
        all: unset;
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
    form {
        all: unset;
    }

    input {
        all: unset;
    }
`;

export default GlobalStyle;
