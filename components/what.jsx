import "./what.css";
import React from 'react';

function what(props) {
    return ( 
        <div className="what">
            <h3>{props.name}</h3>
            <p>{props.p}</p>
        </div>
     );
}

export default what;