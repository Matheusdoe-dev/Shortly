import styled from "styled-components";
// styles
import colors from "../../styles/settings/colors";

export const NavToggleWrapper = styled.div`
  & {
    display: block;
    box-sizing: initial;
    transition: 0.3s;
    cursor: pointer;

    :after,
    :before {
      content: "";
      display: block;
      width: 32px;
      border: 2px solid ${colors.neutral.grayish_violet};
      transition: 0.3s;
    }

    :after {
      margin-top: var(--gap);
      box-shadow: 0 12px 0 0 ${colors.neutral.grayish_violet};
    }
  }

  &.active {
    :after,
    :before {
      margin-top: 0;
    }

    :after {
      box-shadow: none;
      transform: rotate(45deg) translate(0, -3.25px);
      transition: 0.3s transform;
    }

    :before {
      transform: rotate(-45deg) translate(0, 0);
      transition: 0.3s transform;
    }
  }
`;
