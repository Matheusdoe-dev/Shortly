import React from "react";
// imgs
import heroImg from "../../assets/images/illustration-working.svg";
// styles
import { HeroWrapper, HeroImg, HeroContent, HeroContainer } from "./styles";
import PrimaryButton from "../Primary-button";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <HeroImg>
          <img src={heroImg} alt="Working illustration" />
        </HeroImg>

        <HeroContent>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are perfoming.
          </p>

          <PrimaryButton>Get Started</PrimaryButton>
        </HeroContent>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
