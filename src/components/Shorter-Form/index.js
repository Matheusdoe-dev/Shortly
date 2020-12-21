import React from "react";
// hooks
import useShorter from "../../hooks/shorter-hook";
// styles
import { ShorterFormWrapper } from "./styles";
// components
import { Container, Row, Col } from "react-bootstrap";
import PrimaryButton from "../Primary-button";
import Input from "../Input";
import ShortHistory from "../Short-history";

const ShorterForm = () => {
  const { handleSubmitURL, url, setURL, error, setError } = useShorter();

  return (
    <Container fluid>
      <Row>
        <Col xs="12">
          <ShorterFormWrapper onSubmit={handleSubmitURL}>
            <Input
              type="url"
              name="url"
              data-anime="url"
              error={error}
              value={url}
              onChange={(event) => {
                setURL(event.target.value);
                setError("");
              }}
              placeholder="Shorten a link here"
            />
            <PrimaryButton type="submit">Shorten It!</PrimaryButton>
          </ShorterFormWrapper>
          {ShortHistory && <ShortHistory />}
        </Col>
      </Row>
    </Container>
  );
};

export default ShorterForm;
