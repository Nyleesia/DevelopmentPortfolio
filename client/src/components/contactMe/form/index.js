import React from "react";
import {Form, Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Nav from "react-bootstrap/Nav";
// import axios from "axios";
import "./form.css";

const For = () => {
  return (
    <div> 
    <br/>
    <Form className = ""> <h4> Message Me </h4>
      <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Your email will not be shared with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message:</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
 
      <Button variant="primary" type="submit">
        Send
      </Button>

    </Form>
    </div>
  )
} 
    
export default For;