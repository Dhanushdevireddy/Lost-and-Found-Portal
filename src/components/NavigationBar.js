import React, {useState} from "react";
//import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { GoogleLogin } from '@react-oauth/google';
import{
  Link
} from "react-router-dom"

export default function NavigationBar() {
  const [loggedIn] = useState(false)
  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
      <Container>
        <Navbar.Brand as={Link} to="/" eventKey="/">lostNfound</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" eventKey="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/itemsLost" eventKey="/itemsLost">Lost Items</Nav.Link>
            <Nav.Link as={Link} to="/itemsFound" eventKey="/itemsFound">Found Items</Nav.Link>
            <Nav.Link as={Link} to="/itemsCollected" eventKey="/itemsCollected">Collected Items</Nav.Link>
          </Nav>
          
          {loggedIn?<><Nav.Link as={Link} to="/userProfile" eventKey="/userProfile" style={{ "margin-right": "20px" }}>
            User Profile
          </Nav.Link><Button
            variant="danger"
            style={{ "margin-left": "20px"}}
            type="submit"
          >
            Logout
          </Button></>:<GoogleLogin onSuccess={(res)=>{console.log(res)}} onError={(error)=>{console.log(error)}}/>}
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
