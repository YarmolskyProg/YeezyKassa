import React from "react";
import CardGet from "../cardGet/cardGetComponent";
import CardGive from "../cardGive/cardGiveComponent";
import Options from "./options/optionsComponent";

function Curency(props) {
    return (
        <div className="main_left">
            <div className="changes">
                <CardGive />
                <CardGet />
            </div>
            <Options />
        </div>
    )
}

export default Curency