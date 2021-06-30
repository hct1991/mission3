import "../componentsCSS/homepage.css";
import '../App.css';
import React from "react";


export default function Three() {
    return (
        <div>
            <h3>Teaching kids programming and digital skills is MORE than just writing code.</h3>

        <div className="skillSection">

            <div className="skills">
                <img src="arts.png" alt="" className="skillsImage"></img>
                <h6>Creativity<br/>
                & Indiviuality</h6>
            </div>

            <div className="skills">
                <img src="puzzle.png" alt=""></img>
                <h6>Critical Thinking<br/>
                & Problem Solving</h6>
            </div>

            <div className="skills">
                <img src="kindy.png" alt=""></img>
                <h6>Communication<br/>
                & Collaboration</h6>
            </div>

            <div className="skills">
                <img src="lapgirl.png" alt=""></img>
                <h6>Technology<br/>
                & Future Focus</h6>
            </div>
            </div>

        </div>
    );
}