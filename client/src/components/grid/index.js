import React from "react";
import {Container, Row, Col, Card, Image} from "react-bootstrap";
import Vsc from "./vsc.png";
import Html from "./html.png";
import Css from "./css.png";
import Es6 from "./es6.jpeg";
import Node from "./node.png";
import Express from "./express.jpg";
import Sqlze from "./sqlz.png";
import Hdbrs from "./handlebars.png";
import Mongo from "./mongodb.png";
import ReactJs from "./react.png";
import Postman from "./postman.png";
import Bootstrap from "./bootstrap.png";

// import axios from "axios";
import "./grid.css";

class Gri extends React.Component {
    // constructor(props){
    //   super(props)
    //   // this.state={
    //   //   username: ""
    //   // }
    // }
    render(){
      return (
        
        <div className = "gridWrap">
          <hr/>
        <Container>
        <Row>
            <Col>
              <Image src = {Vsc} fluid > 
              </Image> 
            </Col>      
            <Col>        
              <Image src = {Html}fluid> 
              </Image> 
            </Col> 
            <Col>        
              <Image src = {Css}fluid> 
              </Image> 
            </Col>      
            <Col>        
              <Image src = {Es6}fluid> 
              </Image> 
            </Col>   
            <Col>        
              <Image src = {Node}fluid> 
              </Image> 
            </Col>  
            </Row> 
            <hr/>
            <Row>     
            <Col>        
              <Image src = {Express}fluid> 
              </Image> 
            </Col> 
            <Col>        
              <Image src = {Sqlze}fluid> 
              </Image> 
            </Col>      
            <Col>        
              <Image src = {Hdbrs}fluid> 
              </Image> 
            </Col>   
            <Col>        
              <Image src = {Mongo}fluid> 
              </Image> 
            </Col>      
            <Col>        
              <Image src = {ReactJs}fluid> 
              </Image> 
            </Col>    
            </Row>     
        </Container>
        <hr/>
        <br/>
        </div>

      )
    } 
}

  export default Gri;

  
