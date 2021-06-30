import "../componentsCSS/homepage.css";
import React from "react";
import '../App.css';


const images = ["lap1.png","lap2.png","lap3.png","lap4.png"];
let image = "lap1.png";

function selectImage(index){
    image =  images[index];
    //alert(image);
}



export default function Two() {
    return (
        <div class="two">
            <div class="twoLeft">
            <h2>What we offer</h2>
            <p>The Creative Problem Solving programme is series of <br/> 
            digital creation prjects aimed to encourage self- <br/>
            motivation and student agency, designed by New <br/>
            Zealand's leading IT industry experts and schools.</p>
            <br/>
            <div>
            <h2>What will students create?</h2>
            <div className="Bluebuttons">
                <button className="blueButton" onClick={() => selectImage(0)}>
                <img src="frame-copy.png" alt=""></img>
                <h6>ANIMATION</h6>
                </button>
                <button className="blueButton" onClick={() => selectImage(1)}>
                <img src="joystick-copy.png"  alt=""></img>
                <h6>GAMES</h6>
                </button>
                <button className="blueButton" onClick={() => selectImage(2)}>
                <img src="robotic-copy.png"  alt=""></img>
                <h6>CHATBOTS</h6>
                </button>
                <button className="blueButton" onClick={() => selectImage(3)}>
                <img src="augmented-copy.png"  alt=""></img>
                <h6>AUGMENTED <br/>REALITY</h6>
                </button>
                </div>
                </div>
                </div>
          
         <div class="twoRight">
         <img src={image} alt=""></img>
            <div class="bulletLinks" position="relative">
                <a data-links-to="lap1.png" href="1"></a>
                <a data-links-to="lap3.png" href="2"></a>
                <a data-links-to="lap2.png" href="3"></a>
                <a data-links-to="lap4.png" href="4"></a>
            </div>
        </div>
  
        </div>
);
}