import React from "react"; 
import IndividualProjects from "./individualProjects";
import { Container } from "react-bootstrap";
import "./projects.css";

class IndivProj extends React.Component {
    state = {
        projects: {}
    }
    render(){    
        return (
        <Container>        
            <IndividualProjects>
                <div> 
                    {this.state.project.category.individual.title}
                    {this.state.project.category.individual.image}
                    {this.state.project.category.individual.info}
                    {this.state.project.category.individual.repo}
                    {this.state.project.category.individual.site}
                </div>
            </IndividualProjects>      
        </Container>
        )
    }
}

export default IndivProj;