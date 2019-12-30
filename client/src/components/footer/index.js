import React from "react";
import Footer from "react-bootstrap/Navbar";
// import axios from "axios";
import Copyright from "./copyright";
import SiteMap from "./sitemap";
import "./footer.css";

const Foot = () => {
  return (
      <div className = "footerContainer">
        <br/>
        <div className = "fatFooter">         
          <Footer>
            <div className = "footerInfo">         
              <Copyright></Copyright>
            </div>
            <SiteMap></SiteMap>
          </Footer>
        </div>
    </div>
      )
}
    
export default Foot;