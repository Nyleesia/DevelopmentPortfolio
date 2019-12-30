import React from "react"; 
import {Carousel, Card, Container} from "react-bootstrap";

function ELi() {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Container className = "educationContainer">   
    <div className = "education" > 
    <br/>
  <h4> Education </h4>
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} >
      <Carousel.Item>

        <Card>
          <Card.Body>
          <h3>Georgia Institute of Technology</h3>
            <hr></hr>
            <p>Certificate: Full-Stack Web Development</p> 
            <p>May 2019 – November 2019</p>
            </Card.Body>
        </Card>
      </Carousel.Item>

      <Carousel.Item>
      <Card>
          <Card.Body>
          <h3>Professional Institute of Marketing and Business Studies</h3>
            <hr></hr>
            <p>Advance Diploma: Natural Sciences (Pre-Med)</p> 
            September 2015 – May 2017
            </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card>
          <Card.Body>
          <h3>The University of the West Indies</h3>
            <hr></hr>
            <p>Bachelors: Psychology, Management Studies</p> 
            <p>May 2019 – November 2019</p>
            </Card.Body>
        </Card>
      </Carousel.Item>

      <Carousel.Item>
      <Card>
          <Card.Body>
          <h3>Bishop Anstey High School</h3>
            <hr></hr>
            <p>Advance Diploma: Modern Sciences (Pre-Law)</p> 
            September 2006 – May 2008
            </Card.Body>
        </Card>
      </Carousel.Item>
    </Carousel>
    </div>
    </Container>
)
  }

export default ELi;