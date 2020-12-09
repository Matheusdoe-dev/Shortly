import styled from "styled-components";
// styles
import colors from "../../styles/settings/colors";

export const HeroWrapper = styled.section`
  & {
    padding: var(--gap-sm) 0;

    h1 {
      text-align: center;
      margin-top: var(--gap-md);
    }

    p {
      text-align: center;
      color: ${colors.neutral.grayish_violet};
      margin: var(--gap-md) auto 0 auto;
    }

    button {
      text-align: center;
      display: block;
      margin: var(--gap-md) auto 0 auto;
    }
  }
`;

export const HeroImg = styled.img`
  & {
    background-size: cover;
  }
`;
