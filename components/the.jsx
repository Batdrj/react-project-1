import "./the.css"
import React from "react";

function the(props){
    return(
        <div>
            <p className="the-service">{props.ner}</p>
        </div>
    )
}
export default the;