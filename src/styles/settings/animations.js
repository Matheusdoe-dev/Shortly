import { createGlobalStyle } from "styled-components";

const Animations = createGlobalStyle`
   
    @keyframes move-left {
        from {
            transform: translate(-20px,0);
        }

        to {
            transform: translate(0,0);
        }
    }
    
`;

export default Animations;
