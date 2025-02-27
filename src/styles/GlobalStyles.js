import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
        
    }

    body{
        margin: 0;
        padding: 0;
        color: ${(props) => props.theme.colors.owBlack};
        font-family: ${(props) => props.theme.fonts.regular};
        font-size: 16px;
        
    }

    .inner {
        max-width: 1000px;
        padding: 0 2rem;
        margin: auto;
    }

    h1 {
        font-family: ${(props) => props.theme.fonts.heading};
    }

    *a {
        color: ${(props) => props.theme.colors.owBlack}
        
    }
`;

export default GlobalStyles;
