import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: boder-box;
    }

    * {
        margin: 0;
    }

    html, body {
        height: 100%;
    }

    body {
        line-height: 1.5;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        background-color: ${(props) => props.theme.primary};
        color: ${(props) => props.theme["gray-100"]};
        min-width: 320px;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }
    input, button, textarea, select {
        font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }
`
