import React from 'react';
import './App.css';
import Navi from "./components/navbar";
import Jumbo from "./components/jumbotron";
import Tabies from "./components/tabs";
import Projects from "./components/projects";
import ContactMe from "./components/contactMe";
import Foot from "./components/footer";

class Render extends React.Component{

    render(){
        return(
            <div classNwame = "render">
                <Navi/>
                <Jumbo/>
                <Tabies> 
                </Tabies>
                <Projects>
                </Projects>
                <ContactMe>
                </ContactMe>
                <Foot>
                </Foot>
            </div>
        )
    }
}

export default Render;