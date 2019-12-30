import React from "react";
import {Container, Nav} from "react-bootstrap";
// import axios from "axios";
import "./siteMap.css";

const SiteMap = () => {
    return (
    <Container className = "sitemapContainer">
      
      <div className = "sitemapDiv">

        <Nav className="mr-auto map">
        
          <div className = "sitemapAboutDiv">
            <Nav.Item  className = "mapItem" title="About Me" id="basic-nav-dropdown" href="">About Me
                <Nav.Link className = "mapLink" href="">Introduction</Nav.Link>
                <Nav.Link className = "mapLink" href="">Education </Nav.Link>
                <Nav.Link className = "mapLink" href="">Work Experience </Nav.Link>
                <Nav.Link className = "mapLink" href="">Interests </Nav.Link>
            </Nav.Item>
          </div>

          <div className = "sitemapProjectsDiv">
            <Nav.Item className = "mapItem" title="Projects" id="basic-nav-dropdown" href="">Projects
              <Nav.Link className = "mapLink" href="">Individual Projects</Nav.Link>
              <Nav.Link className = "mapLink" href="">Group Projects</Nav.Link></Nav.Item>
          </div>

          <div className = "sitemapContactDiv">
            <Nav.Item className = "mapItem" title="Contact" id="basic-nav-dropdown" href="">Contact
              <Nav.Link className = "mapLink" href="">My Info</Nav.Link>
              <Nav.Link className = "mapLink" href="">Message Me</Nav.Link></Nav.Item>
          </div>

        </Nav> 

      </div>

    </Container>
    )
}
export default SiteMap;