import React, { useState } from "react";
//import { Link } from "react-router-dom";
import Modal from "../screens/Modal";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default function NavigationBar() {
  const [modalView, setModalView] = useState(false)
  return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">lostNfound</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/itemsLost">Lost Items</Nav.Link>
              <Nav.Link href="/itemsFound">Found Items</Nav.Link>
              <Nav.Link href="/itemsCollected">Collected Items</Nav.Link>
              <Nav.Link href="/userProfile">Your Profile</Nav.Link>
              <Button variant="success" style={{"margin":"10px"}} type="submit" onClick={()=>{setModalView(true)}}>Login</Button>
              {modalView? <Modal onClose={()=>{setModalView(false)}}><Login/></Modal>:null}
              <Button variant="success" style={{"margin":"10px"}} type="submit" onClick={()=>{setModalView(true)}}>SignUp</Button>
              {modalView? <Modal onClose={()=>{setModalView(false)}}><SignUp/></Modal>:null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

