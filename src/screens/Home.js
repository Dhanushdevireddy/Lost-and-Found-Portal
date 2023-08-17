import React from "react";
import Footer from "../components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Container>
        <Row>
          <Col xs="12">
            <div className="fs-2" style={{ margin: "50px" }}>
              Did you lose or find an item? Please upload its details here.
            </div>
          </Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNum">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="num" placeholder="Contact Number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicItem">
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="item" placeholder="Item Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicFola">
              <Form.Label>Found or Lost at</Form.Label>
              <Form.Control type="fola" placeholder="Found or Lost at" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicIamge">
              <Form.Label>Image of the Item</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicItemLost">
              <Form.Check type="radio" label="Item Lost" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicItemFound">
              <Form.Check type="radio" label="Item Found" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          
        </Row>
      </Container>
      <Footer />
    </>
  );
}
