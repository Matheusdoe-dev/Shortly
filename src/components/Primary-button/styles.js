import styled from "styled-components";
// styles
import colors from "../../styles/settings/colors";
// components
import { Button } from "react-bootstrap";

export const PrimaryButtonWrapper = styled(Button)`
  & {
    padding: var(--gap-sm) var(--gap-lg);
    border-radius: 50px;
    background: ${colors.primary.cyan};
    border: none;
  }
`;
