import React from "react";
// styles
import { HeaderWrapper, Nav } from "./styles";
// components
import { Container, Row, Col } from "react-bootstrap";
import Brand from "../Brand";
import MobileMenu from "../Mobile-menu";
import NavToggle from "../Nav-Toggle";
import HeaderNav from "../Header-nav";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Container fluid>
          <Row style={{ alignItems: "center" }}>
            <Col xs="5" md="3" lg="2">
              <Brand />
            </Col>
            <Nav xs="7" md="9" lg="10">
              <HeaderNav />
              <NavToggle />
            </Nav>
          </Row>
        </Container>
      </HeaderWrapper>

      <MobileMenu />
    </>
  );
};

export default Header;
