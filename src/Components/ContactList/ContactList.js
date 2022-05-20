import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ContactList.css";

const ContactList = (props) => {
  return (
    <div className="d-flex flex-wrap justify-content-between mt-5">
      {props.contacts.map((item, index) => (
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img src={item.photo} alt={item.name} className="imgContact" />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.lastName}</Card.Text>
            <Button
              variant="secondary"
              onClick={() => props.handleDeleteContact(item.id)}
            >
              Delete
            </Button>
            <Button variant="dark" onClick={() => props.handleEditIndex(index)}>
              Edit
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ContactList;
