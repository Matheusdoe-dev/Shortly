import { createGlobalStyle } from "styled-components";

const Gaps = createGlobalStyle`
    :root {
        --gap: .5rem;
        --gap-xs: .5rem;
        --gap-sm: 1rem;
        --gap-md: 1.5rem;
        --gap-lg: 2rem;
        --gap-xl: 4rem;
    }

    @media (min-width: 768px) {
        --gap: .5rem;
        --gap-xs: 1rem;
        --gap-sm: 1.5rem;
        --gap-md: 2rem;
        --gap-lg: 4rem;
        --gap-xl: 8rem;
    }   
`;

export default Gaps;
