import styled from "styled-components";
// styles
import colors from "../../styles/settings/colors";
import borders from "../../styles/tools/borders";

export const BenefitsWrapper = styled.section`
  & {
    text-align: center;
    padding: var(--gap-xl) 0;

    h2 {
      margin-bottom: var(--gap-md);
    }

    p {
      color: ${colors.neutral.grayish_violet};
      margin-bottom: var(--gap-lg);
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
    width: 40px;
    height: 40px;
    border-radius: ${borders.radius.icons};

    margin: 0 auto var(--gap-md) auto;

    position: absolute;
    top: -21%;
    left: 39%;

    img {
      width: 40px;
      height: 40px;
    }
  }
`;
