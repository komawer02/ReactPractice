import React from "react";
import "./Clock.css";

function Clock(){
    return(
        <div id = "clockframe">
            <div className="time"> {new Date().toLocaleTimeString()}</div>
            <div className="date">{new Date().toLocaleDateString()}</div>
        </div>
    );
}

export default Clock;