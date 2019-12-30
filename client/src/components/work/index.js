import React from "react"; 
import {Carousel, Card, Container} from "react-bootstrap";
import "./work.css"

function WLi() {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Container className = "workContainer">
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <Card><Card.Body> <h3>Full Stack Developer</h3>
            <hr></hr>
            <p>Freelance</p> 
            <p> November 2019 - Present</p></Card.Body></Card>
         
      </Carousel.Item>

      <Carousel.Item>
      <Card><Card.Body><h3>The University of the West Indies</h3>
            <hr></hr>
            <p>Teaching Assistant: Psychology</p> 
            <p>September 2015 – July 2016</p></Card.Body></Card>
      </Carousel.Item>

      <Carousel.Item>
      <Card><Card.Body><h3>The University of the West Indies</h3>
            <hr></hr>
            <p>Research Assistant: Psychology</p> 
            <p>November 2012 – November 2014</p></Card.Body></Card>
      </Carousel.Item>

      <Carousel.Item>
      <Card><Card.Body><h3>Sangre Grande SDA Prinary School </h3>
            <hr></hr>
            <p>Teaching Assistant</p> 
            <p>September 2008 – July 2009</p></Card.Body></Card>
      </Carousel.Item>
    </Carousel>
    </Container>
)
  }

export default WLi;