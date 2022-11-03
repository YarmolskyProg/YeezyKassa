import React from "react";
import Order from "./order";
import OrderInfo from "./orderInfo";

function Info(props) {
    return (
        <div className="main_right">
            <Order/>
            <OrderInfo/>
        </div>
    )
}

export default Info