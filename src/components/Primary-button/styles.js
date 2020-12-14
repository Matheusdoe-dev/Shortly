import styled from "styled-components";
// styles
import colors from "../../styles/settings/colors";
import borders from "../../styles/tools/borders";
import hovers from "../../styles/tools/hovers";
// components
import { Button } from "react-bootstrap";

export const PrimaryButtonWrapper = styled(Button)`
  & {
    padding: var(--gap-sm) var(--gap-lg);
    border-radius: ${borders.radius.buttons};
    background: ${colors.primary.cyan};
    border: none;
    transition: 0.3s;

    font-weight: 700;

    :hover {
      ${hovers.button}
    }
  }
`;
