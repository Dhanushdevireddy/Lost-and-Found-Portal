import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Card() {
  return (
    <Container>
      <Row>
        <Col xs="12" md="6">
        <img src={''} alt='book'></img>
        </Col>
        <Col xs="12" md="6">
        <p>Item Name</p>
        <p>Lost by</p>
        <p>Lost at</p>
        <p>Contact Details</p>
        </Col>
    </Row>
    </Container>
  )
}
