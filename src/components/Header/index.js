import React from "react";
// components
import { Container, Row, Col } from "react-bootstrap";
// imgs
import logoImg from "../../assets/images/logo.svg";
// styles
import { HeaderWrapper } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container fluid>
        <Row>
          <Col xs="5">
            <a href="/">
              <img src={logoImg} alt="Shortly" />
            </a>
          </Col>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
