import React from "react";
import Error from "../errors/error";
import Curency from "./curency/curencyComponent";
import Info from "./info/infoComponent";

function Main(props) {
    return (
        <div className="main center">
            <Error />
            <Curency />
            <Info />
        </div>
    )
}
export default Main