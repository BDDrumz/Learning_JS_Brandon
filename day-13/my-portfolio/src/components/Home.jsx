import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { Link } from "react-router-dom";


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
                <h1>I'M SUIPE BRANDON VERNYUY</h1>
                <h3 className="job">Frontend Developer</h3>
            </div>
            <div>
                <img src=""/>
            </div>
           </div>
           <div className="Footer">
                <p>All Rights Reserved</p>
                <div className="footer-img">
                    <img src="./images/fb1.jpeg"/>
                    <div className="footer-img"><img src="./images/ig.jpeg"/></div>
                    <div className="footer-img"><img src="./images/yout.jpeg"/></div>

                </div>

                {/* nothing */}

                
            </div>
        </div>
        
    )
}
export default Home;