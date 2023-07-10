import React from "react";
import "./Togglepack.css";

function Buttonpack() {
    return (
        <div className="button-pack">
            <input type="radio" id="light" name="mode" className="light-mode" value="Light"></input>
            <label for="light">Light</label>
            <input type="radio" id="dark" name="mode" className="dark-mode" value="Dark"></input>
            <label for="dark">Dark</label>
        </div>
    )
}
export default Buttonpack;