import React from "react";
import {Card, Image, Container, Row, Col} from "react-bootstrap";
// import axios from "axios";
import "./card.css";

const Car = (props) => {
return (
  <div> 
    <br/>
  <h4>  My Info </h4>
  <Card className = "infoCard">
  <Card.Body>
  <Card.Title>Nyleesia Nicome Schnarr</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">Web Developer</Card.Subtitle>
     <Card.Text>
    Phone: 517-507-1232
    <br/>
    <Card.Link href = "Email: nyleesia.nicome@gmail.com">Email: nyleesia.nicome@gmail.com</Card.Link>
    
    </Card.Text>
  <Container className = "LogoContainer">
      <Row>
      <Col className = "col-md-3"></Col>
          <Col className = "footerLogoCol col-md-3" >     
        <Card.Link href="https://www.linkedin.com/in/nyleesia">            
      
            <Image className = "liLogo" src = "https://cdn3.iconfinder.com/data/icons/social-icons-5/606/LinkedIn.png" href = "https://www.linkedin.com/in/nyleesia/"> 
            </Image> 
        </Card.Link>
          </Col>

          <Col className = "cardLogoCol col-md-3">        
        <Card.Link href="https://www.facebook.com/Nyleesia">            
            <Image  className = "fbLogo" src = "https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png" href = "https://www.facebook.com/Nyleesia"> 
            </Image> 
      </Card.Link>
          </Col>     
          <Col className = "col-md-3"></Col>
      </Row>
    </Container>
    </Card.Body>
  </Card>
  </div>
)
}

export default Car;