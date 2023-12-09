import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
        
    }

    body{
        margin: 0;
        padding: 0;
        color: orange;
        font-family: ${(props) => props.theme.fonts.regular};
    }

    h1 {
        font-family: ${(props) => props.theme.fonts.heading};
    }
`;

export default GlobalStyles;
