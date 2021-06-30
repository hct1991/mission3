import React from 'react';
import "../componentsCSS/homepage";
import One from './one.js';
import Two from './two.js';
import Three from './three.js';
import Four from './four.js';
import Five from './five.js';

export default function Homepage() {
    return (
        <div className="mainContainer">
            <One/>
            <Two/>
            <Three/>
            <Four/>
            <Five/>
        </div>
    )
}
