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
                    <div><img src="./images/mg2.png"/></div>
                    <div><img src="./images/img3.png"/></div>
                    <div><img src="./images/img4.png"/></div> 
                    {/* <div><img src="./images/img5.png"/></div>
                    <div><img src="./images/img6.png"/></div> */}
                
                </div>
            </div>
        </div>
    )
}
export default Projects