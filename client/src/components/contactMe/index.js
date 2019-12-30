import React from "react";
import Container from "react-bootstrap/Container";
import {Row, Col} from "react-bootstrap";
import Card from "./card";
import Form from "./form";
// import axios from "axios";
import "./contactMe.css";

const ContactMe = () => {
    return (
        <Container className = "contactMeContainer">
            <Row>
                <Col>            
                    <Card className = "card"></Card>
                </Col>
                <Col>            
                    <Form></Form>
                </Col>
            </Row>

        </Container>
    )
}

export default ContactMe;