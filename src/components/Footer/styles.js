import styled from "styled-components";
// styles
import colors from "../../styles/settings/colors";
import hovers from "../../styles/tools/hovers";

export const FooterWrapper = styled.footer`
  & {
    padding: var(--gap-xl) 0;
    background-color: ${colors.neutral.very_dark_blue};

    a:first-child {
      margin-bottom: var(--gap-xl);
      transition: 0.3s;

      :hover {
        ${hovers.secondary}
      }
    }
  }
`;

export const Attribution = styled.section`
  & {
    text-align: center;
    font-weight: 400;
    color: ${colors.neutral.grayish_violet};

    a {
      color: ${colors.neutral.grayish_violet};
      transition: 0.3s;

      :hover {
        ${hovers.secondary}
      }
    }
  }
`;
