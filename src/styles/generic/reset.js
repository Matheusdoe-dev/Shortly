import { createGlobalStyle } from "styled-components";
// styles
import colors from "../settings/colors";
import fonts from "../settings/fonts";

const Reset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: initial;
        padding: 0.625rem;
    }

    a:hover,
        button:hover {
        cursor: pointer;
    }

    body {
        ${fonts.primary}
        color: ${colors.primary.dark_violet};
        background-color: ${colors.neutral.gray_light};

        min-height: 100vh;
    }

    img {
        display: block;
        width: 100%;
    }

    ul {
        list-style: none;
    }

    fieldset {
        border: none;
    }

    .container-fluid {
        width: 90%;
    }
`;

export default Reset;
