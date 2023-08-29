import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardRendering(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" alt="image" src={props.image} />
      <Card.Body>
        <Card.Title>{props.itemName}</Card.Title>
        <Card.Text>{props.place}</Card.Text>
        <Card.Text>{props.reportedBy}</Card.Text>
        <Card.Text>{props.date}</Card.Text>
        <Card.Text>{props.emailId}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
