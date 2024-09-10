import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
    return(
        <div>
            <nav className="nav-right">
                <Link to={"/Home"}>HOME</Link>
                <Link to={"/Projects"}>PROJECT</Link>
                <Link to={"/Contact"}>CONTACT</Link>
                <Link to={"/About"}>ABOUT</Link>
            </nav>
            <div className="Projects-main">
                <div className="project-heading">
                    <h2>PROJECTS</h2>
                    <div className="project-name">
                    <ul className="names">
                        <a href="">All</a>
                        <a href="">JavaScript</a>
                        <a href="">React</a>
                        <a href="">UI/UX</a>
                    </ul>
                    </div>
                </div>
                <div className="gallery">
                    <div>
                        <img src="./images/p1.png"/>
                    <p></p>
                    </div>
                    <div>
                        <img src="./images/git.png"/>
                    <p></p>
                    </div>
                    <div>
                        <img src="./images/task.png"/>
                    </div> 
                    <div>
                        <img src="./images/add.png"/>
                        <p></p>
                    </div>
                    <div>
                        <img src="./images/des.png"/>
                        <p></p>
                    </div>
                    <div className="btn">
                      <img src="./images/mer.png"/>
                    </div>  
                                  
                </div>
            </div>
            <div className="Footer">
                <p>Designed by @brandoneazzi</p>
                <p>All Rights Reserved</p>
                <div className="footer-img">
                    <div className="footer-img"><img src="./images/fb.png"/></div> 
                    <div className="footer-img"><img src="./images/ig.png"/></div>
                    <div className="footer-img"><img src="./images/you.png"/></div>

                </div>
            </div>
        </div>
    )
}
export default Projects