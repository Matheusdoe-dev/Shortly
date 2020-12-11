import styled from "styled-components";
// styles
import colors from "../../styles/settings/colors";
import grid from "../../styles/objects/grid";

export const HeroWrapper = styled.section`
  & {
    background: white;
  }
`;

export const HeroContainer = styled.div`
  & {
    ${grid.container}

    padding: var(--gap-sm) 15px calc(var(--gap-xl) * 2) 15px;

    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 768px) {
      grid-template-columns: 7fr 5fr;
      grid-template-areas: "content image";
      align-items: center;
      padding-top: var(--gap-xl);
    }
  }
`;

export const HeroImg = styled.div`
  & {
    max-width: 100vw;
    overflow-x: hidden;

    img {
      width: 150%;
    }

    @media (min-width: 768px) {
      grid-area: image;
    }
  }
`;

export const HeroContent = styled.article`
  & {
    h1 {
      text-align: center;
      margin-top: var(--gap-md);
    }

    p {
      text-align: center;
      color: ${colors.neutral.grayish_violet};
    }

    button {
      text-align: center;
      display: block;
      margin: var(--gap-md) auto 0 auto;
    }

    @media (min-width: 768px) {
      grid-area: content;
      column-gap: var(--gap-md);

      h1,
      p {
        text-align: left;
      }

      button,
      p {
        margin: var(--gap-md) 0 0 0;
      }
    }
  }
`;
