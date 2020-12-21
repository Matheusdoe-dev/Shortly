import styled from "styled-components";
// components
import { Col } from "react-bootstrap";

export const HeaderWrapper = styled.header`
  & {
    padding: var(--gap-md) 0;
    background: white;

    a {
      padding: initial;
    }
  }
`;

export const Nav = styled(Col)`
  & {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;
