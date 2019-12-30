import React from "react";
import {Navbar, NavDropdown, Nav, Image} from  "react-bootstrap";
import PaperPlane from "./paperPlane.png"
import "./navbar.css";

const Navi = (props) => {

  return(
  <Navbar className = "naviBar">
    <Navbar.Brand href="/home">
      <Image id = "brand" src = {PaperPlane}></Image>
    </Navbar.Brand>
      <Nav.Link href="/about" className = "myNav">About</Nav.Link>
        <Nav.Link href="/projects" className = "myNav">Projects</Nav.Link>
        <Nav.Link href="/contact" className = "myNav">Contact</Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/nyleesia/" className = "myNav">LinkedIn</Nav.Link>
        <Nav.Link href="https://github.com/Nyleesia" className = "myNav">Github</Nav.Link>
  </Navbar>
  )
}

export default Navi;