import React from "react"; 
import sinInImg from "../assets/images/singInImg.png";
import sinUpImg from "../assets/images/signUpImg.png";
import "./LeftPartBackground.css"

function LeftPartBackground({ src }) {
    let change;
    src === 'sinInImg'? change = sinInImg : change = sinUpImg
    return (
        <div className="container">
            <img src={change} alt={"Background"} />
            <div className="text">
                <p>inspired by the future:</p>
                <h6>the vision ui dashboard</h6>
            </div>
        </div>      
    )
}
export default LeftPartBackground;