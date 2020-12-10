import React from "react";
// imgs
import heroImg from "../../assets/images/illustration-working.svg";
// components
import { Container, Row, Col } from "react-bootstrap";
// styles
import { HeroWrapper, HeroImg } from "./styles";
import PrimaryButton from "../Primary-button";

const Hero = () => {
  return (
    <HeroWrapper>
      <Container fluid>
        <Row>
          <Col xs="12">
            <HeroImg>
              <img src={heroImg} alt="Working illustration" />
            </HeroImg>
          </Col>
          <Col xs="12">
            <h1>More than just shorter links</h1>
            <p>
              Build your brand's recognition and get detailed insights on how
              your links are perfoming.
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </Col>
        </Row>
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
