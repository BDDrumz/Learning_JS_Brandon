import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (

        <div>
            <nav className="nav-right">
                <Link to={"/Home"}>HOME</Link>
                <Link to={"/Projects"}>PROJECT</Link>
                <Link to={"/Contact"}>CONTACT</Link>
                <Link to={"/About"}>ABOUT</Link>
            </nav>
            <div className="About">
                <div className="About-text">
                    <h2>ABOUT ME</h2>
                    <p>I'm a Frontend Devloper deliverying professional work <br />
                       Problem solving skills, Leadership and Mentorship <br />in Software Developing skils <br />
                        </p>
                </div>
                <div className="left-about">
                    <img src="./images/img2.jpg" />
                    <ul>
                        <li>Name: <span>Suipe Brandon</span></li>
                        <li>Residence: <span>Yaounde</span></li>
                        <li>Freelance: <span>Available</span></li>
                        <li>Email: <span className="email">brandoneazzi69@gmail.com</span></li>
                    </ul>
                </div>
                <div className="right-about">
                    <h3>SKILLS</h3>
                    <h4>HTML/CSS</h4>
                    <div className="progress-bar1"><span>80%</span></div>
                    <h4>JavaScript</h4>
                    <div className="progress-bar2"><span>45%</span></div>
                    <h4>React</h4>
                    <div className="progress-bar3"><span>30%</span></div>
                    <h4>Responsive Design</h4>
                    <div className="progress-bar4"><span>60%</span></div>
                    <h4>UI/UX Design</h4>
                    <div className="progress-bar5"><span>70%</span></div>
                </div>
            </div>
            <div className="About-Footer">
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
export default About;