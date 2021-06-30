import { FourK } from "@material-ui/icons";
import "../componentsCSS/homepage.css";
import React from "react";

export default function Five() {
    return (
        <div>
        <div class="fiveLeft">
            <img src="teacher.png" className="teacher"></img>

        </div>
        <div class="fiveRight">
            <h1 class="fiveH">What are you waiting for?</h1>
            <h2 class="fiveH">Start teaching Digital Technologies today.</h2>
            <p class="fiveH">If you need more information, we are happy to answer any<br/>
            questions you may have.</p>

<img src="learn.png" alt="" className="enquire" position="relative" /> <input type="button" value="SIGN UP" className="signup" position="relative" ></input>
        </div>
        </div>
    );
}