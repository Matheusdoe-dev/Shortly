import React from "react";
// styles
import { HeaderWrapper } from "./styles";
// components
import { Container, Row, Col } from "react-bootstrap";
import Brand from "../Brand";
import HeaderNav from "../Header-nav";
import NavToggle from "../Nav-Toggle";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Container fluid>
          <Row style={{ alignItems: "center" }}>
            <Col xs="5">
              <Brand />
            </Col>
            <Col
              xs="7"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <NavToggle />
            </Col>
          </Row>
        </Container>
      </HeaderWrapper>

      <HeaderNav />
    </>
  );
};

export default Header;
