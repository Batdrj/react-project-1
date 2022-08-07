
import {useState} from "react";

function Hook() {
    const [color, setColor] = useState('black')
    return(
        <div>
            <p>minii durtai ungun bol {color}.</p>
            <button type="button" onClick={()=> setColor("Ulaan")}>Click!!!</button>
        </div>
    );
}
export default Hook;