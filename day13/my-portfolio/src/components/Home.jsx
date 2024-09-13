import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import '../App.css'

const Home = () => {
    return(
        <div>
            <div className="main">
            <nav className="nav-right">
                <Link to={"/Home"}>HOME</Link>
                <Link to={"/Projects"}>PROJECT</Link>
                <Link to={"/Contact"}>CONTACT</Link>
                <Link to={"/About"}>ABOUT</Link>
            </nav>
            <div className="text">
                <h1> Hi there <br /> I'M SUIPE BRANDON VERNYUY</h1>
                <h3 className="job">Frontend Developer</h3>
            </div>
           </div>
           <div className="Footer">
                <p>Designed by @brandoneazzi</p>
                <p>All Rights Reserved</p>
                <div className="footer-img">
                    <div className="footer-img"><img src="/images/fb.png"/></div> 
                    <div className="footer-img"><img src="/images/ig.png"/></div>
                    <div className="footer-img"><img src="/images/you.png"/></div>
                </div>
            </div>
        </div>
        
    )
}
export default Home; 