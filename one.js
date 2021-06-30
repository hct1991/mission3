import React from 'react';
import '../App.css';
import '../componentsCSS/homepage.css'

export default function One() {
    return (
        <div className="one">
            <div class="text">
            <h1><div>Prepare young minds</div>
            <div className="kefe"><div>for a better  </div><div class="future">  future.</div></div></h1>
            <p>Let us help you advance students in Digital<br/>Technologies and other learning areas with our<br/
            >project-based learning progamme.</p><img src="learn.png" alt="" className="enquire" position="relative" />
            <input type="button" value="SIGN UP" className="signup" position="relative" ></input><div className="small">*Basic subscription includes the <br/>
            first 15 projects <span>free</span> of charge.</div>
            </div>
             <div><img src="boy.png" alt="" width="100%" height="260"/></div>
            
            
        </div>
    );
}