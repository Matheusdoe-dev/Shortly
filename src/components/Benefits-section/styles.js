import styled from "styled-components";
// styles
import colors from "../../styles/settings/colors";
import borders from "../../styles/tools/borders";
import grid from "../../styles/objects/grid";

export const BenefitsWrapper = styled.section`
  & {
    ${grid.container}

    text-align: center;
    padding: calc(var(--gap-xl) * 2) 0 var(--gap-xl) 0;

    h2 {
      margin-bottom: var(--gap-md);
    }

    p {
      color: ${colors.neutral.grayish_violet};
      margin: 0 auto var(--gap-lg) auto;
    }
  }
`;

export const BenefitsHead = styled.article``;

export const BenefitsItens = styled.section`
  & {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: var(--gap-md);
    }
  }
`;

export const BenefitsItem = styled.article`
  & {
    padding: var(--gap-xl) var(--gap-md) var(--gap-md) var(--gap-md);
    margin: var(--gap-xl) 0;

    position: relative;
    background: white;

    p {
      font-size: 1rem;
      color: ${colors.neutral.grayish_violet};
    }
  }
`;

export const BenefitsIcon = styled.div`
  & {
    background: ${colors.primary.dark_violet};
    padding: var(--gap-md);
    box-sizing: initial;
    width: 36px;
    height: 36px;
    border-radius: ${borders.radius.icons};

    margin: 0 auto var(--gap-md) auto;

    position: absolute;
    top: -43px;
    left: 43%;

    img {
      width: 36px;
      height: 36px;
    }

    @media (min-width: 768px) {
      left: 33%;
    }
  }
`;
