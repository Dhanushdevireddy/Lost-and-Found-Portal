import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import CardRendering from '../components/CardRendering'
import SearchBar from "../components/SearchBar";
import { Col, Container, Row } from "react-bootstrap";

export default function CollectedItems() {
  return (
    <>
      <NavigationBar />
      <Container>
        <Row>
          <Col xs={12}>
            <SearchBar />
          </Col>
        </Row>
        <CardRendering xs={12} md={6} />
        <CardRendering xs={12} md={6} />
        <CardRendering xs={12} md={6} />
        <CardRendering xs={12} md={6} />
      </Container>
      <Footer />
    </>
  );
}
