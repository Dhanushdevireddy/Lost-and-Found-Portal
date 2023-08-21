import React from "react";
//import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

export default function NavigationBar() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
      <Container>
        <Navbar.Brand href="/">lostNfound</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/itemsLost">Lost Items</Nav.Link>
            <Nav.Link href="/itemsFound">Found Items</Nav.Link>
            <Nav.Link href="/itemsCollected">Collected Items</Nav.Link>
          </Nav>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
          <Nav.Link href="/userProfile" style={{ "margin-left": "20px" }}>
            User Profile
          </Nav.Link>
          <Button
            variant="danger"
            style={{ "margin-left": "20px" }}
            type="submit"
          >
            Logout
          </Button>
          <Button
            variant="success"
            style={{ "margin-right": "20px", "margin-left": "20px" }}
            type="submit"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
          <Button
            variant="success"
            type="submit"
            onClick={() => {
              navigate("/signup");
            }}
          >
            SignUp
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
