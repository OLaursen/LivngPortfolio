import React, { useState } from "react";
import "./content-box-styles.css"
import { Link } from "react-router-dom";

function MainView() {
    const [sidetext, setSideText] = useState("");
    const handleClick =  (text) => { setSideText(text) };


    return (
        <>
        <div className="outer-border">
            <div className="landingpage-menu">

            <p className="Title-Name">Oliver Laursen</p>  
            <p className="occupation"> Student at IT-University Copenhagen. </p>
        
        <ul className="main-menu">
            <li>
            <button className="projects-button" onClick={() => handleClick(
                <p className="project-side-text"> Currently the portfolio itself is my only project. But there's more to come soon.</p>
                )}>
            <p className="projects-text">My projects</p>
                </button>
            </li>
            <li>
                <button className="contact-button" to="/contact" onClick={() => handleClick( 
                    <div className="contact-side-text">
                                            <p className="contact-email"><strong>Email:</strong> oliverlaursen1998gmail.com </p>
                                            <p className="contact-linkedin"> <strong> Linked in:</strong> <a className="linkedin-link" href="https://dk.linkedin.com/in/oliver-laursen-swu2022"> My Profile </a></p>
                                            </div>
                                                                    )}>
                <p className="contact-info">Contact info</p>
                </button>
            </li>
            <li>
                <button className="info-button" to="/info" onClick={() => handleClick( 
                    <div className="contact-side-text">
                                            <p className="experience">I have gathered different kinds of experiences through my life</p>
                                            </div>
                                                                    )}>
                <p className="info">Info</p>
                </button>
            </li>
            <div className="landingpage-text">
                {sidetext}
            </div>
            
        </ul>

                                                                        </div>
        </div>
        </>
    );
};
export default MainView;