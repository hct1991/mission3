import "../componentsCSS/homepage.css";
import '../App.css';
import React from "react";

export default function Four() {
    return (
        <div>
        <div className="h2header">
        <h2>How our programme helps teachers and schools</h2>
        </div>
        <div className="tabs">
            <img src="lp.png"></img>
            <img src="dt.png"></img>
            <img src="kc.png"></img>
            <img src="ir.png"></img>
        </div>

        <div classname="boxTitle">
            <h4 class="titleH">Enhance key comptencies</h4>
            <p>The programme enhances capabilities of students in the 5 Key Comptencies identified in the New Zealand Curriculum:</p>
        </div>
        <div classname="boxText" style={{width: "100%"}}>
            <div className="box"><div className="boxImg"><img src="star.png" className="star"></img></div>
            <div className="boxCap"><h3>THINKING</h3>
            <p>In particular the programme focused on problem solving, design thinking and computational thinking.</p></div>
            </div>
            <div className="box"><div><img src="star.png" className="star"></img></div>
            <h3>DISCERNING CODES</h3>
            <p>Analysing language, symbols, and text in order to understand and make sense of the codes in which knowledge is expressed.</p></div>
            </div>
            <div className="box"><div><img src="star.png" className="star"></img><h3>SELF-MANAGEMENT</h3>
            <p>Projects and challenges are designed to motivate students to explore and experiment with self-motivation.</p></div>
            </div>
            <div className="box"><div><img src="star.png" className="star"></img><h3>RELATIONSHIP WITH PEERS</h3>
            <p>The programme is designed with unplugged sessions where students interact in a range of different situations, including things like being able to listen well, recognise different
            points of views, and share ideas.</p></div>
            </div>
            <div className="box"><div><img src="star.png" className="star"></img><h3>PARTICIPATION AND COLLABORATION</h3>
            <p>The programme encourages students to be involved in communities, such as family, whãnau, school, and contribute and make connections with other people.</p></div>
            </div>
        </div>
    );
}