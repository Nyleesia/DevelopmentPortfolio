import React from "react";
import {Button, Card, Carousel, Container} from "react-bootstrap";
import "./individualProjects.css";
import GoogleBooks from "./googleBooks.png"

const IndividualProjects = (props) => {
return (
  <Container>
    <div className = "IndividualProjects" > 
    <br/>
  <h4>  Individual Projects </h4>
  <Carousel>
  <Carousel.Item>
  <Card className = "project" >

  <Card.Body>
  <Card.Title title = "Google Book Search"></Card.Title>

  <Card.Img className="" src = {GoogleBooks}  href = "" alt = "Google Book Search"></Card.Img>

  <Button href = "https://fierce-chamber-86717.herokuapp.com/">Go to Site</Button>

  <Button href= "https://github.com/Nyleesia/googlebooks">Github Repo</Button>

  </Card.Body>
  </Card>
  </Carousel.Item>

  <Carousel.Item>
  <Card className = "project" >

  <Card.Body>
  <Card.Title title = "Google Book Search"></Card.Title>

  <Card.Img className="" src = {GoogleBooks}  href = "" alt = "Google Book Search"></Card.Img>

  <Button href = "https://fierce-chamber-86717.herokuapp.com/">Go to Site</Button>

  <Button href= "https://github.com/Nyleesia/googlebooks">Github Repo</Button>

  </Card.Body>
  </Card>
  </Carousel.Item>

  <Carousel.Item>
  <Card className = "project" >

  <Card.Body>
  <Card.Title title = "Google Book Search"></Card.Title>

  <Card.Img className="" src = {GoogleBooks}  href = "" alt = "Google Book Search"></Card.Img>

  <Button href = "https://fierce-chamber-86717.herokuapp.com/">Go to Site</Button>

  <Button href= "https://github.com/Nyleesia/googlebooks">Github Repo</Button>

  </Card.Body>
  </Card>
  </Carousel.Item>
  </Carousel>
  </div>
  </Container>
  
)
}

export default IndividualProjects;