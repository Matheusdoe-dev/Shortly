import styled from "styled-components";

export const BrandWrapper = styled.a`
  & {
    display: block;
    box-sizing: initial;

    width: 130px;
    height: 36px;

    img {
      width: 130px;
      height: 36px;
    }
  }

  &.center {
    margin: 0 auto;

    img {
      margin: 0 auto;
    }
  }
`;
