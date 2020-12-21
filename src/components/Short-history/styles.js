import styled from "styled-components";
// styles
import colors from "../../styles/settings/colors";
import borders from "../../styles/tools/borders";
import PrimaryButton from "../Primary-button";
// components

export const HistoryList = styled.ul`
  & {
    padding: calc(var(--gap-xl) * 1.5) 0 0 0;

    li {
      margin-bottom: var(--gap-sm);
      padding: var(--gap-sm);
      background: white;
      border-radius: ${borders.radius.primary};

      display: flex;
      justify-content: space-between;
      align-items: center;

      animation: fade-down 0.3s forwards;

      > a {
        font-weight: 400;
        color: ${colors.neutral.very_dark_blue};
        max-width: 100%;
      }

      > div {
        display: flex;
        justify-content: flex-end;
      }

      > div a {
        font-weight: 400;
        color: ${colors.primary.cyan};
      }

      @media (max-width: 768px) {
        flex-direction: column;

        > div {
          flex-direction: column;
        }

        > div a {
          margin-bottom: var(--gap-xs);
        }
      }
    }

    @media (max-width: 768px) {
      padding: var(--gap-lg) 0 0 0;
    }
  }
`;

export const CopyButton = styled(PrimaryButton)`
  & {
    border-radius: ${borders.radius.primary};
    margin-left: var(--gap-xs);
    transition: 0.3s;

    .active {
      transition: 0.3s;
      color: ${colors.primary.dark_violet};
    }
  }
`;
