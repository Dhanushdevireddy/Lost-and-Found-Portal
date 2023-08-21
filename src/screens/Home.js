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
            <Form.Group className="mb-3" controlId="formBasicItem">
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="item" placeholder="Item Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicFola">
              <Form.Label>Found or Lost at</Form.Label>
              <Form.Control type="fola" placeholder="Found or Lost at" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDot">
              <Form.Label>Date and time lost or found at</Form.Label>
              <Form.Control
                type="dot"
                placeholder="Date and Time lost or found at"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Image of the Item</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

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
