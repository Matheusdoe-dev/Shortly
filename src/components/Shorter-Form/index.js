import React from "react";
// styles
import { ShorterFormWrapper } from "./styles";
// components
import { Container, Row, Col } from "react-bootstrap";
import PrimaryButton from "../Primary-button";
import Input from "../Input";

const ShorterForm = () => {
  return (
    <Container>
      <Row>
        <Col xs="12">
          <ShorterFormWrapper>
            <Input type="text" name="url" placeholder="Shorten a link here" />
            <PrimaryButton>Shorten It!</PrimaryButton>
          </ShorterFormWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default ShorterForm;
