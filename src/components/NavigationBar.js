import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { GoogleLogin } from "@react-oauth/google";
import { Link,useLocation } from "react-router-dom";

export default function NavigationBar() {
  const [loggedIn] = useState(true);
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
      <Container>
        <Navbar.Brand as={Link} to="/" eventKey="/">
          lostNfound
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className={"underline" + (url === "/" ?" active" : "")} eventKey="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/itemsLost" className={"underline" + (url === "/itemsLost" ?" active" : "")} eventKey="/itemsLost">
              Lost Items
            </Nav.Link>
            <Nav.Link as={Link} to="/itemsFound" className={"underline" + (url === "/itemsFound" ?" active" : "")} eventKey="/itemsFound">
              Found Items
            </Nav.Link>
            <Nav.Link as={Link} to="/itemsCollected" className={"underline" + (url === "/itemsCollected" ?" active" : "")} eventKey="/itemsCollected">
              Collected Items
            </Nav.Link>
            {loggedIn ? (
              <Nav.Link
                as={Link}
                to="/previouslyReportedItems"
                className={"underline" + (url === "/previouslyReportedItems" ?" active" : "")}
                eventKey="/previouslyReportedItems"
              >
                Previously Reported Items
              </Nav.Link>
            ) : (
              ""
            )}
          </Nav>

          {loggedIn ? (
            <>
              <Button
                variant="danger"
                style={{ "margin-left": "20px" }}
                type="submit"
              >
                Logout
              </Button>
            </>
          ) : (
            <GoogleLogin
              onSuccess={(res) => {
                console.log(res);
              }}
              onError={(error) => {
                console.log(error);
              }}
            />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
