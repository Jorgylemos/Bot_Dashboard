import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: 0.3s ease-in-out;
        font-family: 'Roboto', sans-serif;
    }

    a, ul, button {
        text-decoration: none;
        outline: none;
        border: none;
        background: inherit;
        color: inherit;
        list-style-type: none;
    }
    
    html, body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
    }
`