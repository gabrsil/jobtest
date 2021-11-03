import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background-color: #fff;
    }

    body, button, input {
        font-family: 'Lato', sans-serif;
        font-size: 16px;
    }

    button {cursor: pointer;}

    a {text-decoration: none;}
    ul {list-style-type:none;}

`;

export {};
