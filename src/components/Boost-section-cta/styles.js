import styled from "styled-components";
// styles
import colors from "../../styles/settings/colors";
// imgs
import bgImg from "../../assets/images/bg-boost-mobile.svg";

export const BoostSectionWrapper = styled.section`
  & {
    padding: var(--gap-xl) 0;

    background: no-repeat url(${bgImg}) ${colors.primary.dark_violet} center
      center;
    background-size: cover;
    text-align: center;

    h2 {
      color: ${colors.neutral.gray_light};
      margin-bottom: var(--gap-md);
    }
  }
`;
