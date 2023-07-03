import React, { useState } from "react";
import "./content-box-styles.css"
import { Link } from "react-router-dom";

function mainview() {
    let [sidetext, setSideText] = useState(0);


    return (
        <>
        <div className="outer-border">
            <p className="Title-Name">Oliver Laursen</p>  
            <p className="occupation"> Student at IT-University Copenhagen. </p>
        
        <ul className="main-menu">
            <li>
            <button className="projects-button" onClick={() => setSideText="1"}>
            <p className="projects-text">My projects</p>
                </button>
            </li>
            <li>
                <button to="/contact" onClick={() => setSideText="2"}>
                <p className="contact-info">Contact info</p>
                </button>
            </li>
            <li>
                {sidetext}
            </li>
        </ul>
        </div>
        </>
    );
};
export default mainview;