import React from "react";
import {Card, Carousel, Container} from "react-bootstrap";
import "./groupProjects.css";

const GroupProjects = (props) => {
return (
  <Container>
    <div className = "GroupProjects" > 
    <br/>
  <h4>  Group Projects </h4>
  <Carousel>
    <Carousel.Item>
  <Card className = "project" >

  <Card.Body>
  <Card.Title title = {props.title}></Card.Title>

  <Card.Img className="mb-2 text-muted" src = "" href = "" alt = "Find My Fit"></Card.Img>

  <Card.Link href = {props.repo} link1 ={props.repo}></Card.Link>

  <Card.Link href= {props.site} link2 ={props.site}></Card.Link>

  </Card.Body>
  </Card>
  </Carousel.Item>

  <Carousel.Item>
  <Card className = "project" >

  <Card.Body>
  <Card.Title title = {props.title}></Card.Title>

  <Card.Img className="mb-2 text-muted" src = "" href = "" alt = "Nice City"></Card.Img>

  <Card.Link href = {props.repo} link1 ={props.repo}></Card.Link>

  <Card.Link href= {props.site} link2 ={props.site}></Card.Link>

  </Card.Body>
  </Card>
  </Carousel.Item>

  <Carousel.Item>
  <Card className = "project" >

  <Card.Body>
  <Card.Title title = {props.title}></Card.Title>

  <Card.Img className="mb-2 text-muted" src = "" href = "" alt = "Numbernauts"></Card.Img>

  <Card.Link href = ""></Card.Link>

  <Card.Link href= ""></Card.Link>

  </Card.Body>
  </Card>
  </Carousel.Item>
  </Carousel>
  </div>
  </Container>
  
)
}

export default GroupProjects;