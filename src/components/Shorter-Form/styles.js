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
    background: url(${mobileFormBg}) ${colors.primary.dark_violet} top center;
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
  }
`;
