import styled from "styled-components";
// styles
import colors from "../../styles/settings/colors";
import borders from "../../styles/tools/borders";

export const MobileMenuWrapper = styled.nav`
  & {
    display: none;
    opacity: 0;
    transition: 0.3s;
  }

  &.active {
    display: block;
    opacity: 1;
    transition: 0.3s;

    animation: move-left 0.3s forwards;

    width: 90%;
    padding: var(--gap-lg) var(--gap-md);
    background-color: ${colors.primary.dark_violet};
    border-radius: ${borders.radius.primary};

    position: absolute;
    left: var(--gap-md);
    z-index: 900;

    text-align: center;

    li {
      margin-bottom: var(--gap-lg);

      :last-child {
        margin-bottom: 0;

        button {
          width: 100%;
        }
      }

      :nth-child(3) {
        margin-bottom: 0;
      }

      :nth-child(3)::after {
        content: "";
        display: block;
        width: 100%;
        border: 1px solid ${colors.neutral.grayish_violet};
        opacity: 0.2;
        margin: var(--gap-lg) 0;
      }
    }

    a {
      color: white;
    }
  }
`;
