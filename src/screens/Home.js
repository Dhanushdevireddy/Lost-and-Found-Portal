import React from "react";
import Footer from "../components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

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
          <Col xs={12} lg={{ span: 6, offset: 3 }}>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formBasicItem">
                <Form.Label column sm="4">
                  Item Name
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="item" placeholder="Item Name" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formBasicFola">
                <Form.Label column sm="4">
                  Found or Lost at
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="fola" placeholder="Found or Lost at" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formBasicDot">
                <Form.Label column sm="4">
                  Date and time lost or found at
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="dot"
                    placeholder="Date and Time lost or found at"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formBasicImage">
                <Form.Label column sm="4">
                  Image of the Item
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="file" />
                </Col>
              </Form.Group>

              <Col>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Item Found"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Item Lost"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </Col>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
