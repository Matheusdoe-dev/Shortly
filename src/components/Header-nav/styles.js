import styled from "styled-components";
// styles
import colors from "../../styles/settings/colors";
import hovers from "../../styles/tools/hovers";

export const HeaderNavWrapper = styled.nav`
  & {
    display: none;

    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      ul {
        display: flex;
        align-items: center;

        li {
          margin-right: var(--gap-md);
        }

        a {
          color: ${colors.neutral.grayish_violet};
          font-size: 0.875rem;
          transition: 0.3s;
        }

        a:hover {
          ${hovers.primary}
        }
      }
    }
  }
`;
