import React from "react";
//import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { GoogleLogin } from '@react-oauth/google';

export default function NavigationBar() {

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
          <Nav.Link href="/userProfile" style={{ "margin-left": "20px" }}>
            User Profile
          </Nav.Link>
          <Button
            variant="danger"
            style={{ "margin-left": "20px","margin-right":"20px" }}
            type="submit"
          >
            Logout
          </Button>
          <GoogleLogin onSuccess={()=>{}} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
