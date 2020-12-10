import styled from "styled-components";

export const SocialMediasWrapper = styled.nav`
  & {
    ul {
      display: flex;
      justify-content: center;

      li {
        justify-self: center;

        margin-right: var(--gap-sm);
      }

      li:last-child {
        margin-right: 0;
      }
    }

    a {
      display: inline-block;
      box-sizing: initial;

      img {
        width: 40px;
        height: 40px;
      }
    }
  }
`;
