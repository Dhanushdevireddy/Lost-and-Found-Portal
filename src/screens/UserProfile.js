import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Card from "../components/Card";

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
                <Card/>
                <Card/>
                <Card/>
                <Card/>
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
