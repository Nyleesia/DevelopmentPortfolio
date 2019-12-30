import React from "react";
import {Jumbotron, Container} from  "react-bootstrap";
// import Nav from "react-bootstrap/Nav";
// import axios from "axios";
import "./jumbotron.css";

const Jumbo = (props) => {
  return (
    <div >
  <Jumbotron fluid className = "mainJumbo">
    <Container className = "">
      <h1>Nyleesia Nicome Schnarr</h1>
      <h4>
        Full Stack (MERN) Web Developer
      </h4>
      <hr></hr>
  <p>
    I am a freelance web developer, living and working in the greater Atlanta area. I am passionate about everything I do and that helps me to learn quickly. I am also always looking for new opportunuties and adventures. 
    My education, work experience, projects and contact information can all be found on this site. If you get to the footer and you have not found the information for which you are looking, you can consult the links in the sitemap within the footer. 
    Peace out.
  </p>
</Container>
</Jumbotron>
</div>
)
}

export default Jumbo;