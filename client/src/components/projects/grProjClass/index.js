import React from "react"; 
import GroupProjects from "./groupProjects";
import { Container } from "react-bootstrap";
import axios from "axios";
import "./projects.css";

class GrProj extends React.Component {
    state = {
        title: "", 
        image: "", 
        info: "", 
        repo: "", 
        site: ""
    }
    componentDidMount(){
        axios.get("/groupProjects")
        .then(res=> 
         this.setState({
           title: res.data.project.category.group.title, 
           image: res.data.project.category.group.image,
           info: res.data.project.category.group.info,
           repo: res.data.project.category.group.repo,
           site: res.data.project.category.group.site,
         }))
    }

    render(){    
        return (
        <Container>        
            <GroupProjects>
                <div> 
                    {this.state.title}
                    {this.state.image}
                    {this.state.info}
                    {this.state.repo}
                    {this.state.site}
                </div>
            </GroupProjects>      
        </Container>
        )
    }
}

export default GrProj;