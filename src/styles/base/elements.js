import { createGlobalStyle } from "styled-components";
// styles
import fonts from "../settings/fonts";

const Elements = createGlobalStyle`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        ${fonts.primary}
        font-weight: 700;
        line-height: 1.15em;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    h3 {
        font-size: 1.25rem;
    }

    p {
        font-size: 1.125rem;
        font-weight: 400;
        line-height: 1.5em;
        max-width: 30em;
    }

    a,
    button,
    input,
    span {
        font-size: 1rem;
        line-height: 1em;
    }

    input,
    span {
        font-weight: 400;
    }

    a,
    button {
        font-weight: 700;
    }

    @media (min-width: 768px) {
        h1 {
            font-size: 3rem;
        }

        h2 {
            font-size: 2.25rem;
        }

        h3 {
            font-size: 1.5rem;
        }
    }
`;

export default Elements;
