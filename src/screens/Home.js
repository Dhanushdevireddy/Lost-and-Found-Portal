import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <div className="fs-2">
            Did you lose an item? Please upload its details here.
          </div>
        </Row>
        <Row>
          <Form />
        </Row>
        <Row>
          <div className="fs-2">
            Did you find an item? Please upload its details here.
          </div>
        </Row>
        <Row>
          <Form />
        </Row>
      </Container>
      <Footer />
    </>
  );
}
