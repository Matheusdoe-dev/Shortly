import styled from "styled-components";
// styles
import colors from "../../styles/settings/colors";

export const FooterNavWrapper = styled.nav`
  & {
    text-align: center;

    margin-bottom: var(--gap-lg);

    h3 {
      color: ${colors.neutral.gray};
      margin-bottom: var(--gap-sm);
    }

    li {
      margin-bottom: var(--gap);
    }

    a {
      font-weight: 400;
      color: ${colors.neutral.grayish_violet};
    }
  }
`;
