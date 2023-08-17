import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export default function UserProfile() {
  return (
    <div>
      <NavigationBar />
      <Container>
        <Row>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Your Profile</Accordion.Header>
              <Accordion.Body>
                <p>Name: Blah</p>
                <p>Email ID: Blah</p>
                <p>Mobile Number: Blah</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Previously Reported Items</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Edit Profile</Accordion.Header>
              <Accordion.Body>
                <p>Change Password</p>
                <p>Change Username</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
