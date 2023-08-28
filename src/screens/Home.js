import React from "react";
import Footer from "../components/Footer";
import { Card, Col, Container, Row } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <NavigationBar />
      <Container>
        <Row>
          <Col xs="12" lg="6" className="text-center">
            <div className="fs-2" style={{ margin: "50px" }}>
              <Card>
                <Card.Img
                  style={{ height: "18rem", objectFit: "contain" }}
                  variant="top"
                  src="https://img.freepik.com/premium-vector/blank-a4-paper-template-brochure-mockup_97886-7353.jpg?w=2000"
                />
                <Card.Body>
                  <Card.Title>
                    Lost an item? Lets see if it is there in our found items
                    database.
                  </Card.Title>
                  <Button
                    variant="primary"
                    onClick={() => {
                      navigate("/itemsFound");
                    }}
                  >
                    Found Items
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col xs="12" lg="6" className="text-center">
            <div className="fs-2" style={{ margin: "50px" }}>
              <Card>
                <Card.Img
                  style={{ height: "18rem", objectFit: "contain" }}
                  variant="top"
                  src="https://img.freepik.com/premium-vector/blank-a4-paper-template-brochure-mockup_97886-7353.jpg?w=2000"
                />
                <Card.Body>
                  <Card.Title>
                    Found an item? Lets see if it is there in our lost items
                    database.
                  </Card.Title>
                  <Button
                    variant="primary"
                    onClick={() => {
                      navigate("/itemsLost");
                    }}
                  >
                    Lost Items
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col xs="12" className="text-center">
            <div className="fs-2" style={{ margin: "50px" }}>
              Didn't find the item in our database? Please upload its details
              here.
            </div>
          </Col>
          <Col xs={12} lg={{ span: 6, offset: 3 }}>
            <Form className="text-end">
              <Form.Group as={Row} className="mb-3" controlId="formBasicItem">
                <Form.Label column sm="5">
                  Item Name
                </Form.Label>
                <Col sm="7">
                  <Form.Control type="item" placeholder="Item Name" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formBasicFola">
                <Form.Label column sm="5">
                  Found or Lost at
                </Form.Label>
                <Col sm="7">
                  <Form.Control type="fola" placeholder="Found or Lost at" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formBasicDot">
                <Form.Label column sm="5">
                  Date and time lost or found at
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    type="dot"
                    placeholder="Date and Time lost or found at"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formBasicImage">
                <Form.Label column sm="5">
                  Image of the Item
                </Form.Label>
                <Col sm="7">
                  <Form.Control type="file" />
                </Col>
              </Form.Group>

              <Col className="text-center">
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

              <Col className="text-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
