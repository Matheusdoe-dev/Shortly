import styled from "styled-components";
// styles
import colors from "../../styles/settings/colors";
import borders from "../../styles/tools/borders";

export const InputWrapper = styled.div`
  & {
    width: 100%;

    label {
      margin-bottom: var(--gap);
      display: block;
    }

    input {
      display: block;
      width: 100%;

      color: ${colors.neutral.very_dark_blue};
      padding: var(--gap-sm);
      border-radius: ${borders.radius.primary};
      outline: none;
      border: none;

      transition: 0.3s;
    }

    input:focus {
      filter: brightness(75%);
      transition: 0.3s;
    }

    input.error {
      border: 2px solid var(--danger);
    }

    span {
      display: inline-block;
      margin-top: var(--gap-xs);
      color: var(--danger);
    }
  }
`;
