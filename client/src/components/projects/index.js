import React from "react"; 
import IndividualProjects from "./individualProjects";
import GroupProjects from "./groupProjects";
import { Container, Tabs, Tab } from "react-bootstrap";

import "./projects.css";

const Projects = () => {
    return (
    <Container className = "projectsContainer">
           
        <IndividualProjects></IndividualProjects>

        <GroupProjects></GroupProjects>

    </Container>      

    )
}

export default Projects;