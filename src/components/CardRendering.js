import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardRendering(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" alt="image" src={props.image} />
      <Card.Body>
        <Card.Title>Item Name: {props.itemName}</Card.Title>
        <Card.Text>Place Found or Lost at: {props.place}</Card.Text>
        <Card.Text>Reported by: {props.reportedBy}</Card.Text>
        <Card.Text>Date Lost or found at: {props.date}</Card.Text>
        <Card.Text>Email id: {props.emailId}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
