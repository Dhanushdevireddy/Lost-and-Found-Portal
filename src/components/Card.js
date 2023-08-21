import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image'

export default function Card() {
  return (
    <Container>
      <Row>
        <Col xs="12" md="6">
        <Image src="" alt="image" rounded />
        </Col>
        <Col xs="12" md="6">
          <p>Item Name</p>
          <p>Lost by</p>
          <p>Lost at</p>
          <p>Contact Details</p>
        </Col>
      </Row>
    </Container>
  );
}
