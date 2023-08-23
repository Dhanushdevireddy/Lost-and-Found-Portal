import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GoogleLogin } from '@react-oauth/google';

export default function SignUp() {
  return (
    <Container>
      <Row>
        <Col>
        <GoogleLogin/>
        </Col>
      </Row>
    </Container>
  );
}
