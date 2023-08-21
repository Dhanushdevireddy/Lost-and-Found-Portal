import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Container, Row } from "react-bootstrap";
import Card from "../components/Card";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function UserProfile() {
  return (
    <div>
      <NavigationBar />
      <Container>
        <Row>
          <Tabs
            defaultActiveKey="userProfile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="userProfile" title="Your Profile">
              <p>Name: Blah</p>
              <p>Email ID: Blah</p>
              <p>Mobile Number: Blah</p>
            </Tab>
            <Tab
              eventKey="previouslyReportedItems"
              title="Previously Reported Items"
            >
              <Card />
              <Card />
              <Card />
              <Card />
            </Tab>
            <Tab eventKey="editProfile" title="Edit Profile">
              <p>Change Password</p>
              <p>Change Username</p>
            </Tab>
          </Tabs>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
