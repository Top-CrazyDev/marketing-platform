import { createGlobalStyle } from "styled-components"

import "./typography.css"

const GlobalStyles = createGlobalStyle`
    :root {
        --base-size: 16px;
        --blue-grey: #375369;
        --light-grey: #CFD8E1;
        --blue-black: #1C262F;
        --page-grey: #EAEFF5;
        --hot-pink: #BA4270;
        --white: #FFFFFF;
        --transparent: transparent;
    }

    html {
        font-size: calc(var(--base-size) * 1.125);
        font-family: 'Roboto Regular', sans-serif;
        box-sizing: border-box;
        color: var(--blue-grey)
    }

    body {
        background-color: var(--page-grey)
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    h1, h2 {
        font-family: "Libre Baskerville", serif;
        font-weight: bold;
        line-height: 1.2;
    }

    h1 {
        font-size: calc(var(--base-size) * 2.5);
        margin: 0 0 calc(var(--base-size) * 2);
        @media screen and (min-width: 768px) {
            margin-top: calc(var(--base-size) * 2);
        }
    }

    h2 {
        font-size: calc(var(--base-size) * 2);
    }

    h3, h4, h5, h6 {
        font-family: "Roboto Medium", georgia, serif;
        line-height: 1.2;
    }

    p {
        font-family: "Roboto Regular", georgia, serif;
        font-size: 1rem;
        font-weight: 400;
    }

    input,
    button {
        font-family: "Roboto Medium", georgia, serif;
        font-size: 1rem;
    }

    button {
        cursor: pointer;
    }
`

export default GlobalStyles
