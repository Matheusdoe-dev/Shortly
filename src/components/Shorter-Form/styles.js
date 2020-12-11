import styled from "styled-components";
// styles
import colors from "../../styles/settings/colors";
import borders from "../../styles/tools/borders";
// imgs
import mobileFormBg from "../../assets/images/bg-shorten-mobile.svg";
import desktopFormBg from "../../assets/images/bg-shorten-desktop.svg";

export const ShorterFormWrapper = styled.form`
  & {
    width: 100%;
    padding: var(--gap-md);
    background: no-repeat url(${mobileFormBg}) ${colors.primary.dark_violet}
      center right;
    background-size: contain;
    border-radius: ${borders.radius.primary};

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: var(--gap-xl) 0;

    div {
      margin-bottom: var(--gap-md);
    }

    button {
      width: 100%;
      border-radius: ${borders.radius.primary};
    }

    @media (min-width: 768px) {
      background-image: url(${desktopFormBg});
      background-position: right center;
      background-size: cover;

      position: absolute;
      top: -130px;
      z-index: 900;

      display: grid;
      grid-template-columns: 9fr 3fr;
      column-gap: var(--gap-sm);
      align-items: center;

      padding: var(--gap-lg);

      div {
        margin-bottom: 0;
      }
    }
  }
`;
