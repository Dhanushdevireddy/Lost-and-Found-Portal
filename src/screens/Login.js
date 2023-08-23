import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GoogleLogin } from '@react-oauth/google';

export default function Login() {
  return (
    <Container>
      <Row>
        <Col>
        <GoogleLogin />
        </Col>
      </Row>
    </Container>
  );
}
