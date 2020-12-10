import React from "react";
// imgs
import logoImg from "../../assets/images/logo-2.svg";
// styles
import { FooterWrapper, Attribution } from "./styles";
// components
import { Container, Row, Col } from "react-bootstrap";
import Brand from "../Brand";
import FooterNav from "../Footer-navs";
import SocialMedias from "../Social-medias";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col xs="12" lg="3">
            <Brand secondary />
          </Col>
          <Col xs="12" lg="2">
            <FooterNav
              title="Features"
              options={[
                { label: "Link Shortening", link: "/" },
                { label: "Branded Links", link: "/" },
                { label: "Analytics", link: "/" },
              ]}
            />
          </Col>
          <Col xs="12" lg="2">
            <FooterNav
              title="Resources"
              options={[
                { label: "Blog", link: "/" },
                { label: "Developers", link: "/" },
                { label: "Support", link: "/" },
              ]}
            />
          </Col>
          <Col xs="12" lg="2">
            <FooterNav
              title="Company"
              options={[
                { label: "About", link: "/" },
                { label: "Our Team", link: "/" },
                { label: "Careers", link: "/" },
                { label: "Contact", link: "/" },
              ]}
            />
          </Col>
          <Col xs="12" lg="3">
            <SocialMedias />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Attribution>
              Challenge by{" "}
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                rel="noreferrer"
                target="_blank"
              >
                Frontend Mentor
              </a>
              . Coded by{" "}
              <a href="https://github.com/Matheusdoe-dev" target="BLANK">
                Matheusdoe-dev
              </a>
              .
            </Attribution>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
