
import React from "react";
import { Link } from "react-router-dom";


const Contact = () => {
    return(
        <div>
            <nav className="nav-right">
                <Link to={"/Home"}>HOME</Link>
                <Link to={"/Projects"}>PROJECT</Link>
                <Link to={"/Contact"}>CONTACT</Link>
                <Link to={"/About"}>ABOUT</Link>
            </nav>
           
            <div className="Section">
                
                <div className="Contact-main" >
                <h2>CONTACT</h2>
                </div>
                <div className="Contact-icons">
                    <div>
                        <img src="./images/loc.png" />
                        <p>Location</p>
                        <p>Your Location</p>
                        </div>
                    <div>
                        <img src="./images/call.png" />
                        <p>Phone</p>
                        <p>+xxx xxx xxx</p>
                        </div>
                    <div>
                        <img src="./images/mess.png"/>
                        <p>E-Mail</p>
                        <p>yourmail@gmail.com</p>
                        </div>
                </div>
                <form className="message">
                    <input type="text" className="input-1" placeholder="Name"/>
                    <input type="text" className="input-2" placeholder="Business"/>
                    <textarea name="message" className="input-3" placeholder="Message" ></textarea>
                    <div><button type="submit">Send Message</button></div>
                </form>
            </div>
        </div>
    )
}
export default Contact