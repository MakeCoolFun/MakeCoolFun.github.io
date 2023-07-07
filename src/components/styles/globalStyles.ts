import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        background-color:black;
        padding: 0;
        margin: 0;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    
    :root {
        --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
            'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
            'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;
    }


@font-face {
        font-family: 'BebasNeue-Regular';
        font-weight: 200;
        src: url('../../../public/fonts/BebasNeue-Regular.ttf') format('ttf');
    }

    body{
        font-family: 'BebasNeue-Regular';
    }
    
`;
export default GlobalStyle;
